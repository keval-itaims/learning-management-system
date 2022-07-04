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
  course: CourseResponse | any;
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.course = (<CourseResponse>(this.route.snapshot.data['course']));
  }
}
