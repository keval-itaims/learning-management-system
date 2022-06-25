import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {faLocationDot, faMessage, faPhone, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Contact } from 'src/app/classes/contact';
import { ContactDetails } from 'src/app/classes/contact-details';
import { UtilityService } from 'src/app/services/utility.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup | any;
  contactDetails: ContactDetails | any;
  contact: Contact | any;

  faLocation = faLocationDot;
  faMessage = faMessage;
  faPhone = faPhone;
  faPaperPlane = faPaperPlane;

  contactNumber = ''
  isLoading = true;
  email = ''
  location = ''
  pat_email = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}';
  constructor(private fb:FormBuilder, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.utilityService.getContactDetails().subscribe(
      data => {
        this.isLoading = false;
        this.contactNumber = data[0].phoneNumber;
        this.email = data[0].emailId;
        this.location = data[0].address;
      },
      error => console.log(error)
    )
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      emailId: ['', [Validators.required, Validators.pattern(this.pat_email)]],
      message: ['', [Validators.required]],
      status: [0],
  })
  }
  onSubmit(){
    if(this.contactForm.invalid) return;
    this.contact = this.contactForm.value;
    this.utilityService.contactAdmin(this.contact);
    this.contactForm.reset();
  }
}
