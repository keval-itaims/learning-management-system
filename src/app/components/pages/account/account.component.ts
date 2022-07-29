import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user:User|any;
  constructor(private loginService: LoginService,
    private router: Router, private utilityService: UtilityService,private userService:UserService) { }

  ngOnInit(): void {
    this.user=this.userService.getUser()
  }
  logout(){
    this.loginService.logout();
    this.utilityService.openSnackBar("Logged out successfully!", "Dismiss");
    this.router.navigate(['/']);

  }
}
