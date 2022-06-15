import { Component, OnInit, Input } from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'

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
    console.log(this.course);
    
  }

}
