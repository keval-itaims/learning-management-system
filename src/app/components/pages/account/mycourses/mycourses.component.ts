import { Component, OnInit } from '@angular/core';
import { CourseResponse } from 'src/app/classes/course-response';
import { User } from 'src/app/classes/user';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {
  enrolledCourses: number[] | any;
  myCourses: CourseResponse[]|any;
  user: User|any;
  isLoading = false;

  constructor(private userService: UserService,
    private courseService: CourseService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.user = this.userService.getUser();
    this.enrolledCourses = this.user.myCourses;
    this.myCourses = this.enrolledCourses.map((item:number) => {
      this.courseService.getSingleCourse(item).subscribe(
        data => {
          this.isLoading = false;
          return data;
        },
        (error) => {
          this.isLoading = false;
          console.log(error);
        }
      )
    })
  }
}