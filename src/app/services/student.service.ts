import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseURL = 'http://localhost:8080/student'
  constructor(private httpClient:HttpClient,private router:Router) { }

  public deleteStudent(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }
}
