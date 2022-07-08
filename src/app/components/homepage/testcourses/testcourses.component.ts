import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import { CourseResponse } from 'src/app/classes/course-response';
import { CourseService } from 'src/app/services/course.service';
@Component({
  selector: 'app-testcourses',
  templateUrl: './testcourses.component.html',
  styleUrls: ['./testcourses.component.css']
})
export class TestcoursesComponent implements OnInit {
  testcourses: CourseResponse[]|any;
  faArrow = faArrowRightLong;
  isLoading = false;
  constructor(private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.courseService.getAllCourses().subscribe(
      data => {
        this.isLoading = false;
        this.testcourses = data.length > 4 ? data.slice(0,4) : data;
      },
      error => {
        this.isLoading = false;
        console.log(error);
      }
    )
  }
}
