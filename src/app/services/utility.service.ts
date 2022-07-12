import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getContactMessageById(id:number):Observable<Contact>{
    return this.http.get<Contact>(`${this.baseURL}/${id}`)
  }

  replyContactMessage(contact:Contact):Observable<object>{
    return this.http.post<Object>(`${this.url}/contact-reply`,contact);
  }

  getContactDetails(): Observable<ContactDetails[]>{
    return this.http.get<ContactDetails[]>(`${this.url}/contactDetails`);
  }
  setContactDetails(contactDetails: ContactDetails): Observable<ContactDetails>{
    return this.http.put<ContactDetails>(`${this.url}/contactDetails`, contactDetails);
  }
  contactAdmin(contact: Contact){
    this.http.post<Contact>(`${this.url}/contact`, contact).subscribe(
      _ => {},
      error => console.log(error)
    );
  }
  registerNewsletter(email: string): any{
    return this.http.get<any>(`${this.url}/news-letter/${email}`);
  }
  openSnackBar(message:string, action:string){
    this.snack.open(message, action, {duration:3000})
  }
}

