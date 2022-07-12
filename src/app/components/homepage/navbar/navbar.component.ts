import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {faBars, faUser, faXmark, faAngleDown, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  sidebar = false;
  faBars = faBars;
  faUser = faUser;
  faXmark = faXmark;
  faAngleDown = faAngleDown;
  faGlass = faMagnifyingGlass;
  search = '';
  constructor(private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService) { }

  ngOnInit(): void {}
  @Output() finishedLoading: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngAfterViewInit() {
   this.finishedLoading.emit(true);
  }

  onClick(){
    if(this.loginService.isLoggedIn())    
      this.router.navigate(['homepage/account']);
    else
      this.router.navigate(['homepage/login']);
  }
  logoClick(){
    this.router.navigate(['homepage']);
  }
  onSearch(){
    if(!this.search.trim()) return;
    this.router.navigate(['../courses'], {relativeTo: this.route, state: {search: this.search} })
  }
}
