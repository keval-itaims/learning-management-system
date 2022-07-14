import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {faStar, faClock} from '@fortawesome/free-solid-svg-icons';
import { CourseResponse } from 'src/app/classes/course-response';
import { User } from 'src/app/classes/user';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  clock = faClock;
  star = faStar;
  isEnrolled = false;
  isLoading = false;
  course: CourseResponse | any;
  user: User | any;
  showModal = false;
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.courseService.getSingleCourse(+this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.isLoading = false;
        this.course = data;
        this.user = this.userService.getUser();
        if(!!this.user) return;
        this.user.myCourses.forEach((item:number) => {
          if(item === this.course.courseId){
            this.isEnrolled = true;
            return;
          }
        })
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    )
  }
}
