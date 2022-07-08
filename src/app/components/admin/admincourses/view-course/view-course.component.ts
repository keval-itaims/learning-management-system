import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseResponse } from 'src/app/classes/course-response';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  courseDetail: CourseResponse | any = new CourseResponse()
  isLoading: boolean = true
  constructor(private router: Router, private activatedRouter: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourse()
  }

  private getCourse() {
    const id = this.activatedRouter.snapshot.params['id']
    this.courseService.getSingleCourse(id).subscribe(
      data => {
        console.log(data)
        this.courseDetail = data
        this.isLoading = false
        console.log("Course Data : ", this.courseDetail)
      },
      error => {
        console.log(error)
        this.isLoading = false
      }
    )
  }

  onViewChapters() {

  }

  onDeleteCourse() {
    console.log("inside delete method!")
    this.courseService.deleteCourse(this.courseDetail.courseId).subscribe(
      data => {
        console.log(data),
          this.router.navigate(['/admin/courses/detail'])
      },
      error => {
        console.log(error)
      }
    )
  }

}