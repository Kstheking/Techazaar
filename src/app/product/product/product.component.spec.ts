import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { Product } from '../../models/product';
import { ProductService } from 'src/app/services/product.service';
import { By } from '@angular/platform-browser';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let httpBackend: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductComponent,
      ],
      imports: [
        NzButtonModule,
        NzLayoutModule,
        NzCardModule,
        NzGridModule,
        NzImageModule,
        NzDividerModule,
        NzSpaceModule,
        NzDropDownModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: NZ_I18N,
          useValue: en_US
        },
        ProductService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
  });

  beforeEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    httpBackend = backend;
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = new Product(1, 'https://via.placeholder.com/150', 'Cor Lapis', 99, 10, 50);
    fixture.detectChanges();
  }));


  describe('testing functions of the component', () => {
    it('should render', () => {
      const cardEl = fixture.debugElement.query(By.css(".productName"));
      expect(cardEl).toBeDefined();
      expect(cardEl.nativeElement.textContent).toEqual(`Name: Cor Lapis`);
    });

    it('should have a functioning add button', fakeAsync(()=> {
      const quantityDiv = fixture.debugElement.query(By.css("#quantity"));
      const quantityInCartDiv = fixture.debugElement.query(By.css("#quantityInCart"));

      expect(quantityDiv.nativeElement.textContent).toEqual(`Quantity: 10`);
      expect(quantityInCartDiv.nativeElement.textContent).toEqual(`Quantity in Cart : 50`);

      const addButton = fixture.debugElement.query(By.css("#addToCart"));
      expect(addButton).toBeDefined();
      addButton.triggerEventHandler('click', null);
      
      const httpReq = httpBackend.expectOne("/api/product/1", "change quantity request");
      expect(httpReq.request.method).toEqual('PATCH');
      expect(httpReq.request.body).toEqual({
        changeInQuantity: -1
      });
      httpReq.flush({
        msg: 'Successfully updated cart'
      }, {
        status: 200
      });
      tick();
      fixture.detectChanges();
      expect(quantityDiv.nativeElement.textContent).toEqual(`Quantity: 9`);
      expect(quantityInCartDiv.nativeElement.textContent).toEqual(`Quantity in Cart : 51`);
    }));

    it('should have a functioning remove button',fakeAsync (()=> {
      const quantityDiv = fixture.debugElement.query(By.css("#quantity"));
      const quantityInCartDiv = fixture.debugElement.query(By.css("#quantityInCart"));

      expect(quantityDiv.nativeElement.textContent).toEqual(`Quantity: 10`);
      expect(quantityInCartDiv.nativeElement.textContent).toEqual(`Quantity in Cart : 50`);

      const removeButton = fixture.debugElement.query(By.css("#removeFromCart"));
      expect(removeButton).toBeDefined();
      removeButton.triggerEventHandler('click', null);

      const httpReq = httpBackend.expectOne("/api/product/1", "change quantity request");
      expect(httpReq.request.method).toEqual('PATCH');
      expect(httpReq.request.body).toEqual({
        changeInQuantity: 1
      });
      httpReq.flush({
        msg: 'Successfully updated cart'
      }, {
        status: 200
      });
      tick();
      fixture.detectChanges();

      expect(quantityDiv.nativeElement.textContent).toEqual(`Quantity: 11`);
      expect(quantityInCartDiv.nativeElement.textContent).toEqual(`Quantity in Cart : 49`);
    }));

  });

  

});
