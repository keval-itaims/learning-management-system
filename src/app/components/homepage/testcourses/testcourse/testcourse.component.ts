import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {faStar, faClock} from '@fortawesome/free-solid-svg-icons';
import { CourseResponse } from 'src/app/classes/course-response';

@Component({
  selector: 'app-testcourse',
  templateUrl: './testcourse.component.html',
  styleUrls: ['./testcourse.component.css']
})
export class TestcourseComponent implements OnInit {
  faStar = faStar;
  faClock = faClock;
  @Input() course:any | CourseResponse;
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {    
  }
  courseClick(){
    this.router.navigate([`../course/${this.course.courseId}`], {relativeTo:this.route})
  }

}
