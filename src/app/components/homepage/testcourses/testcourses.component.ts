import { Component, Input, OnInit } from '@angular/core';
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import { CourseResponse } from 'src/app/classes/course-response';
@Component({
  selector: 'app-testcourses',
  templateUrl: './testcourses.component.html',
  styleUrls: ['./testcourses.component.css']
})
export class TestcoursesComponent implements OnInit {
  @Input('courses') testcourses: CourseResponse[]|any;
  faArrow = faArrowRightLong;
  constructor() { }

  ngOnInit(): void {
    this.testcourses = this.testcourses.length > 4 ? this.testcourses.slice(0,4) : this.testcourses;
  }
}
