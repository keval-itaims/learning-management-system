import { Component, OnInit } from '@angular/core';
import {faFilter, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {courses} from './courses'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  faFilter = faFilter;
  faAngleDown = faAngleDown;
  courses = courses;
  constructor() { }

  ngOnInit(): void {
  }

}
