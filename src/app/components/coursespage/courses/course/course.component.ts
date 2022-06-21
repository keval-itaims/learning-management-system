import { Component, Input, OnInit } from '@angular/core';
import {faStar, faClock} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  faStar = faStar;
  faClock = faClock;
  @Input() course:any;
  constructor() { }

  ngOnInit(): void {
  }

}
