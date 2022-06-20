import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faBars, faUser, faXmark, faAngleDown, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

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
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  onClick(){
    this.router.navigate(['homepage/account']);
  }
}
