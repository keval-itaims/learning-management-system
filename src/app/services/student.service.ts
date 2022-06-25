import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseURL = 'http://localhost:8080/user'
  constructor(private httpClient:HttpClient,private router:Router) { }

  public deleteStudent(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

  public getStudent():Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseURL)
  }
}
