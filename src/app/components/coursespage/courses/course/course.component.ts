import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {faStar, faClock} from '@fortawesome/free-solid-svg-icons';
import { CourseResponse } from 'src/app/classes/course-response';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  faStar = faStar;
  faClock = faClock;
  @Input() course:CourseResponse|any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  courseClick(){
    this.router.navigate([`../course/${this.course.courseId}`], {relativeTo:this.route})
  }
}
