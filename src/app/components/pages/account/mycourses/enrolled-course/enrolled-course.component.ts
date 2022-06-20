import { Component, Input, OnInit } from '@angular/core';
import {faStar, faClock} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-enrolled-course',
  templateUrl: './enrolled-course.component.html',
  styleUrls: ['./enrolled-course.component.css']
})
export class EnrolledCourseComponent implements OnInit {
  faStar = faStar;
  faClock = faClock;
  @Input() course:any;
  constructor() { }

  ngOnInit(): void {
  }

}
