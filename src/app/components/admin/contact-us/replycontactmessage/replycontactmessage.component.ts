import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-replycontactmessage',
  templateUrl: './replycontactmessage.component.html',
  styleUrls: ['./replycontactmessage.component.css']
})
export class ReplycontactmessageComponent implements OnInit {

  constructor(private activateRouter:ActivatedRoute) { }
  id!:number
  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params['id'];
    console.log(this.id)
  }

}
