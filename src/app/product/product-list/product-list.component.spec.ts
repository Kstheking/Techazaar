import { ComponentFixture, TestBed } from '@angular/core/testing';

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

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
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
        NzDropDownModule
      ],
      providers: [
        {
          provide: NZ_I18N,
          useValue: en_US
        }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Product list component', ()=> {
    it('should render all the products', () => {
      const product1 = fixture.debugElement.query(By.css("#product_id_0"));
      expect(product1).toBeDefined();
      const product1NameEl = fixture.debugElement.query(By.css('#product_id_0 .productName'));
      expect(product1NameEl).toBeDefined();
      expect(product1NameEl.nativeElement.textContent).toEqual('Name: Blue Donut');

      const product2 = fixture.debugElement.query(By.css("#product_id_1"));
      expect(product2).toBeDefined();
      const product2NameEl = fixture.debugElement.query(By.css('#product_id_1 .productName'));
      expect(product2NameEl).toBeDefined();
      expect(product2NameEl.nativeElement.textContent).toEqual('Name: Dark Orange Donut');
    });
  });

});
