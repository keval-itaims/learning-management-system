import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Instructor } from '../classes/instructor';
import { Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private httpClient:HttpClient,private route:Router) { }
  baseURL:string = "http://localhost:8080/tutor";


  public registerInstructorFromRemote(instructor:User):Observable<User>{
    return this.httpClient.post<User>(`${this.baseURL}`,instructor);
  }

  public getInstructorDetails():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  public getInstructorById(id:number):Observable<User>{
    console.log("id in instructor service:",id)
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  public updateInstructor(instructor:User):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`,instructor);
  }

  public deleteInstructor(id:number):Observable<Object>{
    alert(id);
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
