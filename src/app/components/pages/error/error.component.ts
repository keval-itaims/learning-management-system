import { Component, OnInit } from '@angular/core';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  faChevron = faChevronRight;
  constructor() { }

  ngOnInit(): void {
  }

}
