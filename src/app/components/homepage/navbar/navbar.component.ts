import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faBars, faUser, faXmark, faAngleDown, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faBars = faBars;
  faUser = faUser;
  faXmark = faXmark;
  faAngleDown = faAngleDown;
  faGlass = faMagnifyingGlass;
  sidebar = false;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {

  }
  onClick(){
    if(this.loginService.isLoggedIn())    
      this.router.navigate(['homepage/account']);
    else
      this.router.navigate(['homepage/login']);
  }
}
