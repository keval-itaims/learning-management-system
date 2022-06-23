import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLogin } from '../classes/user-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.url;
  flag = 0;
  constructor(private http: HttpClient) { }
  login(userLogin:UserLogin):number{
    this.doLogin(userLogin).subscribe(
      (data)=>{
        if(data.emailError) this.flag = 1;
        else if(data.passwordError) this.flag = 2;
        else 
          localStorage.setItem('user', JSON.stringify(data));
      }
    )
    return this.flag;
  }
  doLogin(userLogin:UserLogin): Observable<any>{
    return this.http.post<any>(`${this.url}/login`, userLogin);
  }
  isLoggedIn(){
    return localStorage.getItem('user') ? true : false;
  }
}
