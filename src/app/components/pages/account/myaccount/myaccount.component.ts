import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { User } from 'src/app/classes/user';
import { UtilityService } from 'src/app/services/utility.service';

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
  isLoading = false;

  constructor(private fb:FormBuilder, private userService: UserService, private utilityService: UtilityService) {}

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
      emailId: [this.user.emailId],
      password: [
        this.user.password],
      phoneNum: [this.user.phoneNum, [Validators.required, Validators.pattern('^[6789][0-9]{9}$')]]
    });
  }
  onSubmit(){
    if(this.userForm.invalid)return;
    this.isLoading = true;
    this.user.firstName = this.userForm.get("firstName").value;
    this.user.lastName = this.userForm.get("lastName").value;
    this.user.phoneNum = this.userForm.get("phoneNum").value;
    this.userService.updateUser(this.user).subscribe(
      (data) => {
        this.isLoading = false;
        this.userService.saveUser(data);
        this.utilityService.openSnackBar("Account updated!", "Dismiss")
      },
      (error) => {console.log(error);
      this.isLoading = false;}
    );
  }
}
