import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateProductReactiveComponent } from '../product/create-product-reactive/create-product-reactive.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CreateProductGuard implements CanActivate, CanDeactivate<CreateProductReactiveComponent> {

  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let token = this.authService.getToken();
    console.log("can Activate token ", token);
    if (token) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  canDeactivate(
    component: CreateProductReactiveComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
    return window.confirm("Navigating from this page will result in loss of any unsubmitted data, are you sure?");
  }

}
