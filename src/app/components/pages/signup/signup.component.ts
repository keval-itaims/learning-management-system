import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/classes/user';
import { SignupService } from 'src/app/services/signup.service';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  regForm: FormGroup | any;
  user: User = new User();

  //patterns
  password_pattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,}';
  pat_email = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}';
  name_pattern = '[A-Za-z ]+';

  show_pass = false; //Toggle between show & hide password
  match_password_error = false; //To show error of matching password
  emailError = false; //Check if user is already registered

  constructor(private fb: FormBuilder, private signupService: SignupService,
    private router: Router, private route:ActivatedRoute) {}

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
      emailId: ['', [Validators.required, Validators.pattern(this.pat_email)]],
      password: [
        '',
        [Validators.required, Validators.pattern(this.password_pattern)],
      ],
      repeatPassword: ['', [Validators.required]],
      role: ['student'],
    });
  }

  check_password() {
    let pass = this.regForm.controls['password'].value;
    let repeatPassword = this.regForm.controls['repeatPassword'].value;
    this.match_password_error = pass === repeatPassword ? false : true;
  }
  onSubmit(){
    if(this.regForm.invalid) return;
    this.user = this.regForm.value;
    this.signupService.signup(this.user).subscribe(
      (data) => this.emailError = data ? false : true,
      (error) => console.log(error)
    )
    if(!this.emailError){
      this.router.navigate(['./login'], {relativeTo:this.route});
    }
  }
}
