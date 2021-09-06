import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: string, password: string) : Observable<any>{
    return this.http.post('/api/user/login', {
      username: user,
      password: password
    });
  }

  setToken(token: string){
    sessionStorage.setItem("token",token);
  }

  getToken(){
    return sessionStorage.getItem("token");
  }

  register(user: string, password: string): Observable<any>{
    return this.http.post('/api/user/register', {
      username: user,
      password: password
    })
  }
}
