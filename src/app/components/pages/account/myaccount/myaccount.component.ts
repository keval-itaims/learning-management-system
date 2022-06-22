import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  show_pass = false;
  user: any;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.email = this.user.email;
    this.password = this.user.password;
  }
}
