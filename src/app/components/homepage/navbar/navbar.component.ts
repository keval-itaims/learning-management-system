import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
