import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseResponse } from 'src/app/classes/course-response';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { CourseService } from 'src/app/services/course.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  courseDetail: CourseResponse  = new CourseResponse()
  isLoading: boolean = true
  id:number  = 0
  constructor(private router: Router, private activatedRouter: ActivatedRoute, private courseService: CourseService,private confirmDialogService:ConfirmDialogService,private utilityService:UtilityService) { }

  ngOnInit(): void {
    this.getCourse()
  }

  private getCourse() {
    this.id = this.activatedRouter.snapshot.params['id']
    this.courseService.getSingleCourse(this.id).subscribe(
      data => {
        this.courseDetail = data
        this.isLoading = false
      },
      error => {
        console.log(error)
        this.isLoading = false
      }
    )
  }

  onViewChapters() {
    this.router.navigate(['/admin/courses/chapter/detail',this.id])
  }

  onUpdateChapter(){
    this.router.navigate(['/admin/courses/update/',this.id])
  }
  onStudentdetails(){
    this.router.navigate(['/admin/courses/students/',this.id])
  }

  onDeleteCourse(){
    this.confirmDialogService.openConfirmDialog({
      title: 'Delete Course',
      message: 'Are you sure?',
      confirmText: 'Delete',
      cancleText: 'Cancle'
    }).subscribe(
      result => {
        if (result) {
          this.courseService.deleteCourse(this.id).subscribe(
            data => {
              this.utilityService.openSnackBar("Course deleted!", "close")
              this.router.navigate(['/admin/courses/detail'])
            },
            error => console.log(error)
          )
        }

      }
    )
  }

  refreshComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], { relativeTo: this.activatedRouter }).then(() => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => true;
      this.router.onSameUrlNavigation = 'ignore';
    });
  }
}
