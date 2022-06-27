import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { UserLogin } from 'src/app/classes/user-login';
import { LoginService } from 'src/app/services/login.service';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  show_pass = false;
  emailError = false;
  passwordError = false;
  loginForm : FormGroup | any;
  login: UserLogin = new UserLogin();

  pat_email = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}';

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private userService: UserService,
    private router:Router,
    private utilityService: UtilityService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.pattern(this.pat_email)]],
      password: ['', [Validators.required]],
    });
  }
  onSubmit(form: FormGroup) {
    if (form.invalid) return;
    this.login = form.value;
    this.loginService.login(this.login).subscribe(
      (data) => {
        this.emailError = data.emailError;
        this.passwordError = data.passwordError;
        if(this.emailError || this.passwordError) return;
        else{
            this.userService.saveUser(data);
            this.utilityService.openSnackBar("Logged in successfully!", "Dismiss")
            this.router.navigate(['/']);
        }
      },
      error => console.log(error)
    )
  }
}
