import { Component, OnInit } from '@angular/core';
import {faFilter, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {CourseService} from 'src/app/services/course.service'
import { Course } from 'src/app/classes/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  faFilter = faFilter;
  faAngleDown = faAngleDown;
  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(
      (data) => {
        console.log(data)
        this.courses = data;
      },
      (error) => console.log(error)
    )
  }

}
