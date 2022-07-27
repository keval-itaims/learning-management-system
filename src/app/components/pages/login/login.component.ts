import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from 'src/app/classes/user-login';
import { LoginService } from 'src/app/services/login.service';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  show_pass = false;
  emailError = false;
  passwordError = false;
  statusError=false;
  isLoading = false;
  loginForm: FormGroup | any;
  login: UserLogin = new UserLogin();

  pat_email = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private utilityService: UtilityService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.pattern(this.pat_email)]],
      password: ['', [Validators.required]],
    });
  }
  onSubmit(form: FormGroup) {
    if (form.invalid) return;
    this.login = form.value;
    this.isLoading = true;
    this.loginService.login(this.login).subscribe(
      (data) => {
        this.isLoading = false;
        this.emailError = data.emailError;
        this.passwordError = data.passwordError;
        this.statusError=data.statusError
        if (this.emailError || this.passwordError || this.statusError) return;
        else {
          this.userService.saveUser(data);
          this.utilityService.openSnackBar(
            'Logged in successfully!',
            'Dismiss'
          );
          if (data.role === 'student') this.router.navigate(['/']);
          else
            this.router.navigate(['../../admin'], { relativeTo: this.route });
        }
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
}
