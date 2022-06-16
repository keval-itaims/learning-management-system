import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  rep_password: FormControl;

  regForm: FormGroup;

  //patterns
  password_pattern =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{6,}$';
  pat_email = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}';
  name_pattern = '[A-Za-z ]+';

  match_password_error = false; //To show error of matching password

  constructor(private fb: FormBuilder) {}

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
      rep_password: ['', [Validators.required]],
    });
    console.log('Registration Form Created');
  }

  check_password() {
    pass = this.regForm.get('password').value;
    rep_pass = this.regForm.get('rep_password').value;

    if (pass === rep_pass) {
      this.match_password_error = false;
    } else {
      this.match_password_error = true;
    }
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) return;
  }

}
