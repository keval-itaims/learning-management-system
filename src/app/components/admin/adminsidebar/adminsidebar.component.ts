import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';
import { UtilityService } from 'src/app/services/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrls: ['./adminsidebar.component.css']
})
export class AdminsidebarComponent implements OnInit{

  user: User|any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
      
  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService:UserService,
    private loginService:LoginService,
    private utilityService:UtilityService,
    private router: Router) {}
  ngOnInit(): void {

    this.userService.getUser()
    this.user=this.userService.getUser()
   
  }
   
     logout(){
    this.loginService.logout();
    this.utilityService.openSnackBar("Logged out successfully!", "Dismiss");
    this.router.navigate(['/homepage/main']);

  }

}
