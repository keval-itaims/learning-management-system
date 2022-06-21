import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:8080/login'
  constructor(private http: HttpClient) { }
  login(user:User){
    this.doLogin(user).subscribe(
      (data)=>{

      }
    )
  }
  doLogin(user:User): Observable<any>{
    return this.http.post<any>(this.url, user);
  }
}
