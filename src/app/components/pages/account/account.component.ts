import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private loginService: LoginService,
    private router: Router, private utilityService: UtilityService) { }

  ngOnInit(): void {
  }
  logout(){
    this.loginService.logout();
    this.utilityService.openSnackBar("Logged out successfully!", "Dismiss");
    this.router.navigate(['/']);
  }
}
