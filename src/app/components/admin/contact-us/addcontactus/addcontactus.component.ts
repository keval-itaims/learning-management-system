import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactDetails } from 'src/app/classes/contact-details';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-addcontactus',
  templateUrl: './addcontactus.component.html',
  styleUrls: ['./addcontactus.component.css']
})
export class AddcontactusComponent implements OnInit {

  constructor(private utilityService:UtilityService,private router:Router) { }

  contactusForm : FormGroup | any;
  contactDetail : ContactDetails | any
  ngOnInit(): void {

    this.contactusForm = new FormGroup({

      "email" :new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      "phoneNo" : new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
      "address" : new FormControl('',[Validators.required])
    })
  }


  onAddContactusDetail(){
      this.contactDetail = this.contactusForm.value;
      console.log(this.contactDetail)
      const data = this.utilityService.addContactusDetail(this.contactDetail);
  }

  get email(){return this.contactusForm.get('email')};
  get phoneno(){return this.contactusForm.get('phoneNo')}
  get address(){return this.contactusForm.get('address')}
}
