import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseResponse } from 'src/app/classes/course-response';
import { User } from 'src/app/classes/user';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css'],
})
export class MycoursesComponent implements OnInit {
  enrolledCourses: number[] | any;
  myCourses: CourseResponse[] | any = [];
  user: User | any;
  isLoading = false;

  constructor(
    private userService: UserService,
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.user = this.userService.getUser();
    this.enrolledCourses = this.user.myCourses;
    if (this.enrolledCourses.length == 0) {
      this.isLoading = false;
      return;
    }
    this.enrolledCourses.forEach((item: number) => {
      this.isLoading = true;
      this.courseService.getSingleCourse(item).subscribe(
        (data) => {
          this.isLoading = false;
          this.myCourses.push(data);
        },
        (error) => {
          this.isLoading = false;
          console.log(error);
        }
      );
    });
  }
  onClick() {
    if (this.user.role === 'student')
      this.router.navigate(['/homepage/courses']);
  }
}
