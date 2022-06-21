import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/classes/user';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  regForm: FormGroup | any;
  user: User = new User();

  //patterns
  password_pattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,}';
  pat_email = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}';
  name_pattern = '[A-Za-z ]+';

  show_pass = false; //Toggle between show & hide password
  match_password_error = false; //To show error of matching password
  email_error = false; //Check if user is already registered

  constructor(private fb: FormBuilder, private signupService: SignupService) {}

  ngOnInit() {
    this.regForm = this.fb.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern(this.name_pattern)],
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern(this.name_pattern)],
      ],
      email: ['', [Validators.required, Validators.pattern(this.pat_email)]],
      password: [
        '',
        [Validators.required, Validators.pattern(this.password_pattern)],
      ],
      repeatPassword: ['', [Validators.required]],
    });
  }

  check_password() {
    let pass = this.regForm.controls['password'].value;
    let repeatPassword = this.regForm.controls['repeatPassword'].value;

    this.match_password_error = pass === repeatPassword ? false : true;
  }

  togglePassword() {
    this.show_pass = !this.show_pass;
  }
  onSubmit(form:FormGroup){
    if(form.invalid) return;
    this.user = form.value;
    this.email_error = this.signupService.signup(this.user)
  }
}
