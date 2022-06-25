import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url = environment.url;
  flag = true;
  constructor(private http: HttpClient) { }
  signup(user: User): boolean{

    this.doSignup(user).subscribe(
      (data) => {
        if(data!=null){
          this.flag = false;
          console.log(data)
          console.log("flag")
        }
        else
          this.flag = true;
      },
      (error) => {
      console.log(error);
      }
    );
    return this.flag;
  }
  doSignup(user: User): Observable<any>{
    return this.http.post<any>(`${this.url}/register`, user);
  }
}
