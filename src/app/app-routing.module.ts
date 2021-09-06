import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreateProductGuard } from './guards/create-product.guard';
import { CreateProductReactiveComponent } from './product/create-product-reactive/create-product-reactive.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/create', component: CreateProductReactiveComponent, canActivate: [CreateProductGuard], canDeactivate: [CreateProductGuard]},
  {path: 'product/details/:id', component: ProductDetailsComponent},
  {path: '**', redirectTo: '/register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
