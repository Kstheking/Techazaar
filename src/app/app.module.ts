import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product/product.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { ProductListComponent } from './product/product-list/product-list.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { CreateProductReactiveComponent } from './product/create-product-reactive/create-product-reactive.component';

import { ProductService } from './services/product.service';
import { SearchProductComponent } from './product/search-product/search-product.component';

import { SearchProductService } from './services/search-product.service';
import { AuthService } from './services/auth.service';
import { HeaderAttacherInterceptor } from './services/header-attacher.interceptor';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { CreateProductGuard } from './guards/create-product.guard';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CreateProductComponent,
    CreateProductReactiveComponent,
    SearchProductComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzLayoutModule,
    NzCardModule,
    NzGridModule,
    NzImageModule,
    NzDividerModule,
    NzSpaceModule,  
    NzDropDownModule,
    NzFormModule,
    NzIconModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    ProductService,
    SearchProductService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderAttacherInterceptor,
      multi: true
    },
    CreateProductGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
