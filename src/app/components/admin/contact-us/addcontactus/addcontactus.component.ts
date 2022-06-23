import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcontactus',
  templateUrl: './addcontactus.component.html',
  styleUrls: ['./addcontactus.component.css']
})
export class AddcontactusComponent implements OnInit {

  constructor() { }

  contactusForm : FormGroup | any;
  ngOnInit(): void {

    this.contactusForm = new FormGroup({

      "email" :new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      "phoneNo" : new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
      "address" : new FormControl('',[Validators.required])
    })
  }


  onAddContactusDetail(){

  }

  get email(){return this.contactusForm.get('email')};
  get phoneno(){return this.contactusForm.get('phoneNo')}
  get address(){return this.contactusForm.get('address')}
}
