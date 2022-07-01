import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {faStar, faClock} from '@fortawesome/free-solid-svg-icons';
import { Course } from 'src/app/classes/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  clock = faClock;
  star = faStar;
  courseId = 0;
  course: Course | any;
  constructor(private router: Router, private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.params['id'];
    this.courseService.getSingleCourse(this.courseId).subscribe(
      data => {
        console.log(data);
        this.course = data;
      },
      error => {
        console.log(error);
      }
    )
  }

}
