import { Component, OnInit, ViewChild } from '@angular/core';
import { InstructorService } from 'src/app/services/instructor.service';
import { Instructor } from 'src/app/classes/instructor';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/classes/user';
import { StudentService } from 'src/app/services/student.service';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilityService } from 'src/app/services/utility.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentDetail!:User[]
  isLoading:boolean = true;

  displayedColumns: string[] = ['firstName', 'lastName', 'emailId','action'];
  dataSource : MatTableDataSource<User[]> | any

  constructor(private studentService:StudentService,private router:Router,private confirmDialogService:ConfirmDialogService,private utilityService:UtilityService) { }

  getStudent(){
    this.studentService.getStudent().subscribe(
      data => {
        this.isLoading = false;
        console.log(data)
        this.studentDetail = data.filter((item)=>{
          return item.role === "student";
        })
        this.dataSource = new MatTableDataSource(this.studentDetail);
        console.log(this.studentDetail)
      },
      error => {
        this.isLoading = false;
        console.log(error)
      }
    )
  }

  ngOnInit(): void {

      this.getStudent();
  }

  deleteStudent(id:any){
    this.confirmDialogService.openConfirmDialog(
      {
        title:'Delete Student',
        message:'Are you sure?',
        confirmText:'Delete',
        cancleText : 'cancle'
      }
    ).subscribe(
      result => {
        if(result){
          this.studentService.deleteStudent(id).subscribe(
            data =>{

              this.utilityService.openSnackBar("Student deleted!","close");
              this.getStudent()
            },
            error => {

              console.log(error)
            }

          )
        }
        else{
          alert("student not deletd!")
        }
      }
    )


  }
  onDeleteStudent(element:any){
    let id = element.user_id;
    this.deleteStudent(id);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
