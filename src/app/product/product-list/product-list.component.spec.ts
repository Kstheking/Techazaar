import { ComponentFixture, inject, TestBed, tick } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ProductComponent } from '../product/product.component';

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

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { SearchProductService } from 'src/app/services/search-product.service';
import { ProductService } from 'src/app/services/product.service';
import { fakeAsync } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let httpBackend: HttpTestingController;

  beforeEach(async () => { //it cool to use async await here but when you are not sure of where async calls maybe made
    //use waitForAsync
    await TestBed.configureTestingModule({
      declarations: [
        ProductListComponent,
        ProductComponent
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
        SearchProductService,
        ProductService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
  });

  beforeEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    httpBackend = backend;
  }));

  describe('Product list renders', fakeAsync(() => {
    fixture.detectChanges();
    httpBackend.expectOne({
      url: `/api/product?q=`,
      method: 'GET' //why I can't find this way mentioned in angular docs?
    }).flush([
      {
        id: 1,
        imageSource: "assets/images/donuts/blueDonut.svg",
        name: "Blue Donut",
        price: 34,
        quantity: 10,
        quantityInCart: 0
      },
      {
        id: 2,
        imageSource: "assets/images/donuts/darkOrangeDonut.svg",
        name: "Dark Orange Donut",
        price: 34,
        quantity: 10,
        quantityInCart: 0
      }
    ]);
    tick();
    fixture.detectChanges();
    
    let products = fixture.debugElement.queryAll(By.css('app-product'));
    expect(products.length).toEqual(2);

    const product1 = fixture.debugElement.query(By.css('#product_id_0'));
    expect(product1).toBeDefined(); //an empty array can be truthy so to stay on the safe side just use ths toBeDefined
    const product1NameEl = fixture.debugElement.query(By.css('#product_id_0 .productName'));
    expect(product1NameEl).toBeDefined();
    expect(product1NameEl.nativeElement.textContent).toEqual('Name: Blue Donut');

    const product2 = fixture.debugElement.query(By.css('#product_id_1'));
    expect(product2).toBeDefined();
    const product2NameEl = fixture.debugElement.query(By.css('#product_id_1 .productName'));
    expect(product2NameEl).toBeDefined();
    expect(product2NameEl.nativeElement.textContent).toEqual('Name: Dark Orange Donut');
  }));

});
