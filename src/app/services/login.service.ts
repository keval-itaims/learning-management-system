import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../classes/login-response';
import { User } from '../classes/user';
import { UserLogin } from '../classes/user-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.url;
  constructor(private http: HttpClient) { }
  login(userLogin:UserLogin): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.url}/login`, userLogin);
  }
  isLoggedIn(){
    return !!localStorage.getItem('user');
  }
  logout(){
    localStorage.removeItem("user");
  }
  forgotPassword(email:string): Observable<boolean>{
    return this.http.post<boolean>(`${this.url}/user/forgot-password`, email);
  }
}
