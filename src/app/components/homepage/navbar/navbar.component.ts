import { Component, OnInit } from '@angular/core';
import {faBars, faUser, faCross, faAngleDown, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faBars = faBars;
  faUser = faUser;
  faCross = faCross;
  faAngleDown = faAngleDown;
  faGlass = faMagnifyingGlass;
  constructor() { }

  ngOnInit(): void {
  }

}
