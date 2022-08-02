import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/classes/instructor';
import { MatTableDataSource } from '@angular/material/table';
import { InstructorService } from 'src/app/services/instructor.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { User } from 'src/app/classes/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilityService } from 'src/app/services/utility.service';

import { CourseResponse } from 'src/app/classes/course-response';

@Component({
  selector: 'app-instructor-course',
  templateUrl: './instructor-course.component.html',
  styleUrls: ['./instructor-course.component.css']
})
export class InstructorCourseComponent implements OnInit {

  details: CourseResponse[] | any = [];
  instructorDetail : User |any;
  isLoading: boolean = true;
  previousTutor : User[] = [];

  id:number  = 0
  constructor(private instructorService: InstructorService,private activatedRouter: ActivatedRoute, private router: Router, private confirmDialogService: ConfirmDialogService, private utilityService: UtilityService) { }
 
  displayedColumns: string[] = ['courseImage', 'courseDate','courseName','coursePrice'];
  dataSource: MatTableDataSource<CourseResponse[]> | any;

  
  ngOnInit(): void {

    this.getdetails()
    this.course()
 }
  private course()
  {
    this.id = this.activatedRouter.snapshot.params['id']
    console.log(this.id)
    this.instructorService.courseDetails(this.id).subscribe(
      data => {
        console.log(data)
        this.details = data
        this.dataSource = new MatTableDataSource(this.details);
        this.isLoading = false
      },
      error => {
        console.log(error)
        this.isLoading = false
      }
    )
  }


  

  private getdetails() {
    this.id = this.activatedRouter.snapshot.params['id']
    this.instructorService.getInstructorById(this.id).subscribe(
      data => {
        this.instructorDetail = data
        this.isLoading = false
      },
      error => {
        console.log(error)
        this.isLoading = false
      }
    )
  }


  onUpdateInstructor() {

      this.router.navigate(['/admin/instructor/update/', this.id]);
  
   }
   onDeleteInstrcutor() {
    this.confirmDialogService.openConfirmDialog({
      title: 'Delete Course',
      message: 'Are you sure?',
      confirmText: 'Delete',
      cancleText: 'Cancle'
    }).subscribe(
      result => {
        if (result) {
          this.instructorService.deleteInstructor(this.id).subscribe(
            data => {
              this.utilityService.openSnackBar("Instructor deleted!", "close")
              this.router.navigate(['/admin/instructor/detail'])
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
