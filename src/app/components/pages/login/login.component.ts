import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  show_pass = false;

  email: FormControl;
  password: FormControl;
  loginForm: FormGroup;

  pat_email = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.pat_email)]],
      password: ['', [Validators.required]],
    });
    console.log('Form Builded');
  }

  togglePassword() {
    console.log('toggle password');
    this.show_pass = !this.show_pass;
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) return;
  }

}
