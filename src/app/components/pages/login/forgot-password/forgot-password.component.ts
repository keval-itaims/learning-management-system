import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email = ''
  emailError = false;
  isLoading = false;
  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute, private utilityService: UtilityService) { }

  ngOnInit(): void {
  }
  onClick(){
    this.isLoading = true;
    this.loginService.forgotPassword(this.email).subscribe(
      (response) => {
        this.isLoading = false;
        this.emailError = !response;
        if(response){
          this.utilityService.openSnackBar("An email has been sent to your email address!", "Dismiss")
          this.router.navigate(['../login'], {relativeTo: this.route})
        }
      },
      error => {console.log(error)
      this.isLoading = false;}
    );
  }
}
