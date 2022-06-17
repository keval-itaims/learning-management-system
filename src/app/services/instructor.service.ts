import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Instructor } from '../classes/instructor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  // constructor(private http:HttpClient) { }

  // public registerInstructorFromRemote(instructor:Instructor):Observable<any>{
  //   return this.http.post<any>("http://localhost:8080/registeruser",instructor);
  // }
}
