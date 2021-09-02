import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductService } from 'src/app/services/product.service';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { inject } from '@angular/core/testing';
import { CreateProductReactiveComponent } from './create-product-reactive.component';


describe('CreateProductReactiveComponent', () => {
  let component: CreateProductReactiveComponent;
  let fixture: ComponentFixture<CreateProductReactiveComponent>;
  let httpBackend: HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductReactiveComponent ],
      providers: [
        ProductService
      ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    httpBackend = backend;
    fixture = TestBed.createComponent(CreateProductReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

});
