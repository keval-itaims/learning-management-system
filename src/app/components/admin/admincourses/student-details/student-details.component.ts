import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/services/instructor.service';
import { Instructor } from 'src/app/classes/instructor';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/classes/user';
import { StudentService } from 'src/app/services/student.service';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilityService } from 'src/app/services/utility.service';
import { CourseService } from 'src/app/services/course.service';
import { CourseResponse } from 'src/app/classes/course-response';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  studentDetail:CourseResponse[] | any = [];
  isLoading:boolean = true;
  id : number | any = 0

  displayedColumns: string[] = ['firstName', 'lastName', 'emailId','phoneNo'];
  dataSource : MatTableDataSource<User[]> | any

  constructor(private activatedRouter:ActivatedRoute,private courseService:CourseService,private router:Router,private confirmDialogService:ConfirmDialogService,private utilityService:UtilityService) { }

  ngOnInit(): void{

    this.getStudentDetails();
}
  getStudentDetails()
  {
     
      this.id = this.activatedRouter.snapshot.params['courseId'];
      console.log(this.id)
      this.courseService.studentDetails(this.id).subscribe(
      data => {
        console.log(data)
        this.studentDetail = data
        console.log(this.studentDetail)
        this.isLoading = false;
        this.dataSource = new MatTableDataSource(this.studentDetail);
  },
    error => {
      this.isLoading = false;
      console.log(error)
    }
  )
  }

 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
