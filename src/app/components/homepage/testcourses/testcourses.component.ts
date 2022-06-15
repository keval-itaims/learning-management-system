import { Component, OnInit } from '@angular/core';
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import {testcourses} from './testcourses'
@Component({
  selector: 'app-testcourses',
  templateUrl: './testcourses.component.html',
  styleUrls: ['./testcourses.component.css']
})
export class TestcoursesComponent implements OnInit {
  testcourses = testcourses;
  faArrow = faArrowRightLong;
  constructor() { }

  ngOnInit(): void {
  }

}
