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
  getUser(): JSON{
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
  saveUser(user:User){
    localStorage.setItem("user", JSON.stringify(user));
  }
  updateUser(user:User): Observable<User>{
    return this.http.put<User>(`${this.url}/user`, user);
  }
}
