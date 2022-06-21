import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { UserLogin } from 'src/app/classes/user-login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  show_pass = false;
  emailError = false;
  passwordError = false;
  loginForm : FormGroup | any;
  login: UserLogin = new UserLogin();
  pat_email = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}';

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.pat_email)]],
      password: ['', [Validators.required]],
    });
  }

  togglePassword() {
    this.show_pass = !this.show_pass;
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) return;
    this.login = form.value;
    let result = this.loginService.login(this.login);
    if(result == 1)
      this.emailError = true;
    else if(result == 2)
      this.passwordError = true;
    else{
      this.emailError = this.passwordError = false;
    }
  }

}
