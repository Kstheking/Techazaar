import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class HeaderAttacherInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('inteceptor triggered');
    let token = this.authService.getToken();
    if(token){
      const authReq = request.clone({
        headers: request.headers.set(
          'X-AUTH-HEADER',
          token
        ),
        url : `${request.url}`
      });
      request = authReq;
    }
    return next.handle(request);
  }
}
