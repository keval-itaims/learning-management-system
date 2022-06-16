import { Component, OnInit } from '@angular/core';
import {faLocationDot, faMessage, faPhone, faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faLocation = faLocationDot;
  faMessage = faMessage;
  faPhone = faPhone;
  faArrow = faArrowRightLong;
  constructor() { }

  ngOnInit(): void {
  }

}
