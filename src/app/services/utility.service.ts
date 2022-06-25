import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Contact } from '../classes/contact';
import { ContactDetails } from '../classes/contact-details'

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private httpClient:HttpClient) { }

  baseURL = 'http://localhost:8080/contact';

  public addContactusDetail(contactDetail:ContactDetails):any{
    this.httpClient.put<any>(`${this.baseURL}`,contactDetail).subscribe(
      data => {

        return data},
      error => {console.log(error)
            return false;
      }
    );

  }

  public getContactusDetail():Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(this.baseURL);
  }
}

