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

  public registerInstructorFromRemote(instructor:Object):Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseURL}`,instructor);
  }

  public getInstructorDetails():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  public getInstructorById(id:number):Observable<Instructor>{
    return this.httpClient.get<Instructor>(`${this.baseURL}/${id}`);
  }

  public updateInstructor(id:number,instructor:Instructor):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,instructor);
  }

  public deleteInstructor(id:number):Observable<Object>{
    alert(id);
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
