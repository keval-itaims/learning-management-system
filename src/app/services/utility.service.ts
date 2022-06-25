import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../classes/contact';
import { ContactDetails } from '../classes/contact-details'

import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  url = environment.url;

  constructor(private http:HttpClient) { }

  baseURL = 'http://localhost:8080/contact';

  public addContactusDetail(contactDetail:ContactDetails):any{
    this.http.put<any>(`${this.baseURL}`,contactDetail).subscribe(
      data => {

        return data},
      error => {console.log(error)
            return false;
      }
    );

  }

  public getContactusDetail():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.baseURL);
  }


  getContactDetails(): Observable<ContactDetails[]>{
    return this.http.get<ContactDetails[]>(`${this.url}/contactDetails`);
  }
  setContactDetails(contactDetails: ContactDetails): Observable<ContactDetails>{
    return this.http.post<ContactDetails>(`${this.url}/contactDetails`, contactDetails);
  }
  contactAdmin(contact: Contact){
    this.http.post<Contact>(`${this.url}/contact`, contact).subscribe(
      data => {},
      error => console.log(error)
    );
  }
}

