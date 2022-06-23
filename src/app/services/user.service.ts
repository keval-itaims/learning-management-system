import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url =  environment.url;
  constructor(private http: HttpClient) { }
  getUser(){
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
  updateUser(user:User){
    this.doUpdate(user).subscribe(
      (data)=>{
        localStorage.setItem("user", JSON.stringify(data));
      },
      (error) => {
        console.log("something went wrong");
      }
    );
  }
  doUpdate(user:User): Observable<User>{
    return this.http.put<User>(`${this.url}/user`, user);
  }
}
