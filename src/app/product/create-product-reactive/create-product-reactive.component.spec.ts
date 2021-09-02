import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { ProductService } from 'src/app/services/product.service';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { inject } from '@angular/core/testing';
import { CreateProductReactiveComponent } from './create-product-reactive.component';
import { Product } from 'src/app/models/product';


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
  }));

  it('should not do anything when form data is invalid', fakeAsync(() => {
    component.resetForm();
    component.submitForm();
    httpBackend.expectNone('/api/product', 'add product api call');
  }));

  it('should create product on correct data', fakeAsync(() => {
    component.productForm.setValue({
      name: 'Test product',
      price: 20,
      url: 'http://test.product.com',
      onSale: false
    });
    component.submitForm();
    const httpReq = httpBackend.expectOne('/api/product', 'create product call');
    expect(httpReq.request.method).toEqual('POST');
    const product = new Product(null, 'http://test.product.com', 'Test product', 20, 0, 10 );
    expect(httpReq.request.body).toEqual(product);

    spyOn(component.refreshProducts, 'emit'); //first make jasmine spy on the eventEmitter's emit method

    httpReq.flush({
      msg: "Test message"
    }, {
      status: 200
    });
    tick();
    expect(component.refreshProducts.emit).toHaveBeenCalledWith("refreshItBrother");
    
    expect(component.productForm.getRawValue).toEqual({
      name: null,
      price: 0,
      url: null,
      onSale: false
    });
  }));

  it('should not create product on incorrect data', fakeAsync(() => {
    component.productForm.setValue({
      name: 'Test product',
      price: 20,
      url: 'http://test.product.com',
      onSale: false
    });
    component.submitForm();
    const httpReq = httpBackend.expectOne('/api/product', 'create product call');
    expect(httpReq.request.method).toEqual('POST');
    const product = new Product(null, 'http://test.product.com', 'Test product', 20, 0, 10 );
    expect(httpReq.request.body).toEqual(product);

    spyOn(component.refreshProducts, 'emit'); //first make jasmine spy on the eventEmitter's emit method

    httpReq.flush({
      msg: "Product seems to already have an id assigned"
    }, {
      status: 400
    });
    tick();
    expect(component.refreshProducts.emit).not.toHaveBeenCalled();
    
    expect(component.productForm.getRawValue).toEqual({
      name: 'Test product',
      price: 20,
      url: 'http://test.product.com',
      onSale: false
    });
  }));

});
