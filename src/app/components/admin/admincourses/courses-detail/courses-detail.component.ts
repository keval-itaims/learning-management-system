import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CourseResponse } from 'src/app/classes/course-response';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { CourseService } from 'src/app/services/course.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailsComponent implements OnInit {

  courseDetails!:CourseResponse[] | any
  isLoading : boolean = true
  displayedColumns: string[] = ['courseImage', 'courseDate','courseName','coursePrice', 'action'];
  dataSource: MatTableDataSource<CourseResponse[]> | any;

  constructor(private courseService:CourseService,private confirmDialogService:ConfirmDialogService,private utilityService:UtilityService,private router:Router) { }


  ngOnInit(): void {
    this.getAllCourses()
  }

  private getAllCourses(){
    this.courseService.getAllCourses().subscribe(
      data =>{
        console.log(data)
        this.courseDetails = data;
        // console.log(this.courseDetails.courseDate)
        // this.courseDetails.courseDate = this.courseDetails.courseDate.split(0,9)
        console.log(this.courseDetails)
        this.dataSource = new MatTableDataSource(this.courseDetails);
        this.isLoading = false
      },
      error => {
        this.isLoading = false
        console.log(error)
      }
    )
  }

  onViewCourse(element:any){
    let id = element.courseId;
    this.router.navigate(['/admin/courses/view',id])
  }

  onDeleteCourse(element:any){
    let id = element.courseId;
    alert("course Id : " + id)
    this.confirmDialogService.openConfirmDialog({
      title: 'Delete Course',
      message: 'Are you sure?',
      confirmText: 'Delete',
      cancleText: 'Cancle'
    }).subscribe(
      result => {
        if (result) {
          this.courseService.deleteCourse(id).subscribe(
            data => {
              console.log(data)
              this.utilityService.openSnackBar("Instructor deleted!", "close");
              this.getAllCourses()

            },
            error => console.log(error)
          )
        }


      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
