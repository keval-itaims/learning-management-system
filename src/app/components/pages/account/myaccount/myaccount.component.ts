import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  user:User = new User()
  userForm: FormGroup | any;
  name_pattern = '[A-Za-z ]+';
  constructor(private fb: FormBuilder,
    private userService: UserService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: [
        this.user.firstName,
        [Validators.required, Validators.pattern(this.name_pattern)],
      ],
      lastName: [
        this.user.lastName,
        [Validators.required, Validators.pattern(this.name_pattern)],
      ],
      email: [
        this.user.email,
      ],
  })
  }
  onSubmit(){
    this.user.firstName = this.userForm.firstName;
    this.user.lastName = this.userForm.lastName;
  }
}
