import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../classes/contact';
import { ContactDetails } from '../classes/contact-details';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  url = environment.url;

  constructor(private http: HttpClient) { }

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
