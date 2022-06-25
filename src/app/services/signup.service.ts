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
  constructor(private http: HttpClient) { }


  signup(user: User): Observable<User>{
    return this.http.post<User>(`${this.url}/register`, user);
  }
}
