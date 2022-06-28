import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
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
  id !: number
  isLoading : boolean = true;


  ngOnInit(): void {

    this.contactusForm = new FormGroup({

      "emailId" :new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      "phoneNumber" : new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
      "address" : new FormControl('',[Validators.required])
    })
    this.getContactDetail();
  }

  getContactDetail(){
    this.utilityService.getContactDetails().subscribe(
      data => {
        console.log("Data received!",data[0]);
        this.contactDetail = data[0];
        console.log("contact object",this.contactDetail);

        this.contactusForm.patchValue({
          emailId : this.contactDetail.emailId,
          phoneNumber : this.contactDetail.phoneNumber,
          address : this.contactDetail.address
        })
        this.isLoading = false;

      },
      error => console.log(error)
    )
  }

  onAddContactusDetail(){
      this.id = this.contactDetail.cId;
      this.contactDetail = this.contactusForm.value;
      this.contactDetail.cId = this.id
      console.log(this.contactDetail)
      this.utilityService.setContactDetails(this.contactDetail).subscribe(
        data => this.router.navigate(['/admin/contact-us/detail']),
        error => console.log(error)
      );
  }

  get email(){return this.contactusForm.get('emailId')};
  get phoneno(){return this.contactusForm.get('phoneNumber')}
  get address(){return this.contactusForm.get('address')}
}
