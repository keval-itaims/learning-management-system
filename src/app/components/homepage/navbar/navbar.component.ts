import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faBars,
  faUser,
  faXmark,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  sidebar = false;
  faBars = faBars;
  faUser = faUser;
  faXmark = faXmark;
  faGlass = faMagnifyingGlass;
  search = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  onClick() {
    if (this.loginService.isLoggedIn())
      this.router.navigate(['homepage/account']);
    else this.router.navigate(['homepage/login']);
  }
  logoClick() {
    this.router.navigate(['homepage']);
  }
  onSearch() {
    if (!this.search.trim()) return;
    this.router.navigate(['/courses'], {
      relativeTo: this.route,
      state: { search: this.search },
    });
  }
}
