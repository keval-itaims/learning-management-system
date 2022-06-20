import { Component, OnInit } from '@angular/core';
import { enrolledCourses } from './enrolledCourses';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {
  enrolledCourses = enrolledCourses;
  constructor() { }

  ngOnInit(): void {
  }

}
