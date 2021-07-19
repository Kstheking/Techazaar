import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { Product } from '../../models/product';
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

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

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
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = new Product('https://via.placeholder.com/150', 'Cor Lapis', 99, 10, 50);
    fixture.detectChanges();
  });

  describe('testing functions of the component', () => {
    it('should render', () => {
      const cardEl = fixture.debugElement.query(By.css(".productName"));
      expect(cardEl).toBeDefined();
      expect(cardEl.nativeElement.textContent).toEqual(`Name: Cor Lapis`);
    })
  });

});
