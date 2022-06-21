import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Instructor } from '../classes/instructor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private httpClient:HttpClient,private route:Router) { }
  baseURL:string = "http://localhost:8080/instructor";

  public registerInstructorFromRemote(instructor:Object):Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseURL}`,instructor);
  }

  public getInstructorDetails():Observable<Instructor[]>{
    return this.httpClient.get<Instructor[]>(`${this.baseURL}`);
  }

  public getInstructorById(id:number):Observable<Instructor>{
    return this.httpClient.get<Instructor>(`${this.baseURL}/${id}`);
  }

  public updateInstructor(id:number,instructor:Instructor):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,instructor);
  }

  public deleteInstructor(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
