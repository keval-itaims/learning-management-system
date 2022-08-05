import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/classes/user';
import { SignupService } from 'src/app/services/signup.service';
import {
  faEye,
  faEyeSlash,
  faLessThanEqual,
} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  regForm: FormGroup | any;
  user: User = new User();
  showModal = false;
  otp: number | any;
  inputotp: number | any;

  otpError = false;

  email = '';

  //patterns
  password_pattern =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{8,}';
  pat_email = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}';
  name_pattern = '[A-Za-z ]+';

  show_pass = false; //Toggle between show & hide password
  match_password_error = false; //To show error of matching password
  emailError = false; //Check if user is already registered
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private signupService: SignupService,
    private router: Router,
    private route: ActivatedRoute,
    private utilityService: UtilityService
  ) {}

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
      status: [true],
      phoneNum: [
        this.user.phoneNum,
        [Validators.required, Validators.pattern('^[6789][0-9]{9}$')],
      ],
    });
  }

  check_password() {
    let pass = this.regForm.controls['password'].value;
    let repeatPassword = this.regForm.controls['repeatPassword'].value;
    this.match_password_error = pass === repeatPassword ? false : true;
  }

  onSubmit() {
    if (this.regForm.invalid) return;
    this.user = this.regForm.value;
    if(this.match_password_error) return;
    this.isLoading=true
    this.signupService
      .otpGeneration({
        emailId: this.user.emailId,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
      })
      .subscribe(
        (otp) => {
          if (otp === null) {
      
            this.emailError = true;
            this.isLoading = false;
            return;
          }

          this.otp = otp;
          this.isLoading = false;
          this.emailError = false;
          
          this.showModal = !this.showModal;
        },
        (error) => {
          console.log(error);
          this.isLoading = false;
        }
      );
  }
  onRegister() {
    this.otpError = this.otp == this.inputotp ? false : true;
    if (this.otpError) return;
    if (!this.otpError) {
      this.isLoading = true;
      this.showModal = !this.showModal;
      this.signupService.signup(this.user).subscribe(
        (data) => {
          this.isLoading = false;
          if (data === null) {
            this.emailError = true;
            return;
          } else {
            this.emailError = false;
            this.utilityService.openSnackBar(
              'Account registered successfully!',
              'Dismiss'
            );
            this.router.navigate(['../login'], { relativeTo: this.route });
          }
        },
        (error) => {
          console.log(error);
          this.isLoading = false;
        }
      );
    }
  }
}
