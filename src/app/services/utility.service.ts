import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config, Observable } from 'rxjs';
import { Contact } from '../classes/contact';
import { ContactDetails } from '../classes/contact-details'
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  url = environment.url;

  constructor(private http:HttpClient, private snack: MatSnackBar) { }

  baseURL = 'http://localhost:8080/contact';


  getContactMessages():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.baseURL);
  }

  getContactDetails(): Observable<ContactDetails[]>{
    return this.http.get<ContactDetails[]>(`${this.url}/contactDetails`);
  }
  setContactDetails(contactDetails: ContactDetails): Observable<ContactDetails>{
    return this.http.put<ContactDetails>(`${this.url}/contactDetails`, contactDetails);
  }
  contactAdmin(contact: Contact){
    this.http.post<Contact>(`${this.url}/contact`, contact).subscribe(
      data => {},
      error => console.log(error)
    );
  }
  openSnackBar(message:string, action:string){
    this.snack.open(message, action, {duration:3000})
  }
}

