import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.loginService.logout();
    this.router.navigate(['/']);
  }
}
