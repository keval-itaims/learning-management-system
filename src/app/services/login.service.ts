import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';
import { UserLogin } from '../classes/user-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:8080/login'
  flag = 0;
  constructor(private http: HttpClient) { }
  login(user:UserLogin):number{
    this.doLogin(user).subscribe(
      (data)=>{
        if(data.emailError) this.flag = 1;
        else if(data.passwordError) this.flag = 2;
        else 
          localStorage.setItem('user', JSON.stringify(data));
      }
    )
    return this.flag;
  }
  doLogin(user:UserLogin): Observable<any>{
    return this.http.post<any>(this.url, user);
  }
  isLoggedIn(){
    return localStorage.getItem('user') ? true : false;
  }
}
