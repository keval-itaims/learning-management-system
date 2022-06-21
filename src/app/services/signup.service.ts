import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url = 'http://localhost:8080/signup'
  flag = true;
  constructor(private http: HttpClient) { }
  signup(user: User): boolean{
    
    this.doSignup(user).subscribe(
      (data) => {
        if(data)
          this.flag = false;
        else
          this.flag = true;
      }
    );
    return this.flag;
  }
  doSignup(user: User): Observable<any>{
    return this.http.post<any>(this.url, user);
  }
}
