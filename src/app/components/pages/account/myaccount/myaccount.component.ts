import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  show_pass = false;
  user: User|any;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  userForm: FormGroup|any;
  name_pattern = '[A-Za-z ]+';
  constructor(private fb:FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.userForm = this.fb.group({
      firstName: [
        this.user.firstName,
        [Validators.required, Validators.pattern(this.name_pattern)],
      ],
      lastName: [
        this.user.lastName,
        [Validators.required, Validators.pattern(this.name_pattern)],
      ],
      email: [this.user.email],
      password: [
        this.user.password],
    });
  }
  onSubmit(){
    if(this.userForm.invalid)return;
    this.user.firstName = this.userForm.get("firstName").value;
    this.user.lastName = this.userForm.get("lastName").value;
  }
}
