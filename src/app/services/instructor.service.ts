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

  public registerInstructorFromRemote(instructor:Instructor):Observable<Instructor>{
    return this.httpClient.post<Instructor>(`${this.baseURL}`,instructor);
  }

  public getInstructorDetails():Observable<Instructor[]>{
    return this.httpClient.get<Instructor[]>(`${this.baseURL}`);
  }

  public getInstructorById(id:string):Observable<Instructor>{
    return this.httpClient.get<Instructor>(`${this.baseURL}/${id}`)
  }
}
