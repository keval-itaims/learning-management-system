import { Component, OnInit } from '@angular/core';
import {faLocationDot, faMessage, faPhone, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Contact } from 'src/app/classes/contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faLocation = faLocationDot;
  faMessage = faMessage;
  faPhone = faPhone;
  faPaperPlane = faPaperPlane;
  contactNumber = '+91 1234123433';
  email = 'info@support.com'
  location = '70-80, Upper St Norwich NR2 1LT 39191'
  constructor() { }

  ngOnInit(): void {}
  onSubmit(){
  }
}
