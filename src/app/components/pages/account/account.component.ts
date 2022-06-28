import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  isLoading = false;
  constructor(private loginService: LoginService,
    private router: Router, private utilityService: UtilityService) { }

  ngOnInit(): void {
  }
  logout(){
    this.isLoading = true;
    this.loginService.logout();
    this.isLoading = false;
    this.utilityService.openSnackBar("Logged out successfully!", "Dismiss");
    this.router.navigate(['/']);
  }
}
