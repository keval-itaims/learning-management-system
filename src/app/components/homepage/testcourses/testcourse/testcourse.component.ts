import { Component, OnInit, Input } from '@angular/core';
import {faStar, faClock} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testcourse',
  templateUrl: './testcourse.component.html',
  styleUrls: ['./testcourse.component.css']
})
export class TestcourseComponent implements OnInit {
  faStar = faStar;
  faClock = faClock;
  @Input() course:any;
  constructor() { }

  ngOnInit(): void {    
  }

}
