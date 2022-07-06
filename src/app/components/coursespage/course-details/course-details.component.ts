import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {faStar, faClock} from '@fortawesome/free-solid-svg-icons';
import { CourseResponse } from 'src/app/classes/course-response';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  clock = faClock;
  star = faStar;
  isLoading = false;
  course: CourseResponse | any;
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.courseService.getSingleCourse(+this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.isLoading = false;
        this.course = data;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    )
  }
}
