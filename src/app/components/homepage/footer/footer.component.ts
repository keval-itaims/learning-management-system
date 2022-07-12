import { Component, OnInit } from '@angular/core';
import {faLocationDot, faMessage, faPhone, faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import { UtilityService } from 'src/app/services/utility.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  emailPattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}'
  faLocation = faLocationDot;
  faMessage = faMessage;
  faPhone = faPhone;
  faArrow = faArrowRightLong;
  email = ''
  isLoading = false;

  constructor(private utility: UtilityService) { }

  ngOnInit(): void {
  }
  onClick(){
    if(!this.email || !this.email.match(this.emailPattern)) return;
    this.isLoading = true;
    this.utility.registerNewsletter(this.email).subscribe(
      (_:any) => {
        this.isLoading = false;
        this.email = '';
        this.utility.openSnackBar("Thank you for subscribing!", "Dismiss");
      },
      (error:any) => {
        this.isLoading = false;
        console.log(error);
      }
    )
  }
}
