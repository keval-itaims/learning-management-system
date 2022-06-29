import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/classes/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  courseId = 0;
  course: Course | any;
  constructor(private router: Router, private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['id'];
    this.courseService.getSingleCourse(this.courseId).subscribe(
      data => {
        this.course = data;
      },
      error => {
        console.log(error);
      }
    )
  }

}
