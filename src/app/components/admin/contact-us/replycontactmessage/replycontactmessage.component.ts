import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';
import { Contact } from '../../../../classes/contact';

@Component({
  selector: 'app-replycontactmessage',
  templateUrl: './replycontactmessage.component.html',
  styleUrls: ['./replycontactmessage.component.css']
})
export class ReplycontactmessageComponent implements OnInit {

  constructor(private activateRouter:ActivatedRoute,private utilityService:UtilityService,private router:Router) { }
  id!:number
  contactMessage!:Contact;
  replyMessageForm !: FormGroup;
  isLoading : boolean = true

  ngOnInit(): void {

    this.replyMessageForm = new FormGroup({
      "name" : new FormControl(''),
      "emailId" : new FormControl(''),
      "message" : new FormControl(''),
      "replyMessage" : new FormControl('',[Validators.required])

    })
    this.getContactMessage();
  }

  getContactMessage(){
    this.id = this.activateRouter.snapshot.params['id'];
    console.log("id",this.id);
    this.utilityService.getContactMessageById(this.id).subscribe(
      data => {

        console.log("Data : ",data),
        this.contactMessage = data;
        console.log("Object",this.contactMessage)
        this.replyMessageForm.patchValue({
          name : this.contactMessage.name,
          emailId : this.contactMessage.emailId,
          message : this.contactMessage.message
        })
        this.isLoading = false;

    },
      error => {
        this.isLoading = false;
        console.log(error)
      }
    )
  }

  onReply(){
    this.isLoading = true
    this.contactMessage = this.replyMessageForm.value;
    this.contactMessage.cId = this.id;
    console.log(this.contactMessage);

    this.utilityService.replyContactMessage(this.contactMessage).subscribe(
      data => {
        this.isLoading = false;
        this.utilityService.openSnackBar("Mail send!","close");
        this.router.navigate(['/admin/contact-us/detail'])
        console.log(data)
      },
      error => console.log(error)
    )
  }

  get name(){return this.replyMessageForm.get('name')}
  get emailId(){return this.replyMessageForm.get('emailId')}
  get message(){return this.replyMessageForm.get('message')}
  get replymessage(){return this.replyMessageForm.get('replyMessage')}
}
