import { Component, OnInit, ViewChild } from '@angular/core';
import { InstructorService } from 'src/app/services/instructor.service';
import { Instructor } from 'src/app/classes/instructor';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/classes/user';
import { StudentService } from 'src/app/services/student.service';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentDetail:User[] = [
      {"user_id":1,"firstName":'parth',"lastName":'shah',"emailId":'abc@gmail.com',"role":"Student","password":'',"repeatPassword":'', 'phoneNum':'', "emailError":false, "passwordError":false},
      {"user_id":2,"firstName":'Harsh',"lastName":'shah',"emailId":'abc@gmail.com',"role":"Student","password":'',"repeatPassword":'', 'phoneNum':'', "emailError":false, "passwordError":false},
      {"user_id":3,"firstName":'Keval',"lastName":'shah',"emailId":'abc@gmail.com',"role":"Student","password":'',"repeatPassword":'', 'phoneNum':'', "emailError":false, "passwordError":false},
      {"user_id":4,"firstName":'Shubham',"lastName":'shah',"emailId":'abc@gmail.com',"role":"Student","password":'',"repeatPassword":'', 'phoneNum':'', "emailError":false, "passwordError":false},
      {"user_id":5,"firstName":'Sunny',"lastName":'shah',"emailId":'abc@gmail.com',"role":"Student","password":'',"repeatPassword":'', 'phoneNum':'', "emailError":false, "passwordError":false},
  ];

  displayedColumns: string[] = ['firstName', 'lastName', 'emailId','action'];
  dataSource : MatTableDataSource<User[]> | any

  constructor(private studentService:StudentService,private router:Router,private confirmDialogService:ConfirmDialogService) { }

  getStudent(){
    this.studentService.getStudent().subscribe(
      data => {
        console.log(data)
        this.studentDetail = data.filter((item)=>{
          return item.role === "student";
        })
        this.dataSource = new MatTableDataSource(this.studentDetail);
        console.log(this.studentDetail)
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
            data => window.location.reload(),
            error => console.log(error)

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
