import { Component, OnInit, ViewChild } from '@angular/core';
import { InstructorService } from 'src/app/services/instructor.service';
import { Instructor } from 'src/app/classes/instructor';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/classes/user';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentDetail:User[] = [
      {"user_id":1,"firstName":'parth',"lastName":'shah',"email":'abc@gmail.com',"role":"Student","password":'',"repeatPassword":''},
      {"user_id":2,"firstName":'Harsh',"lastName":'shah',"email":'abc@gmail.com',"role":"Student","password":'',"repeatPassword":''},
      {"user_id":3,"firstName":'Keval',"lastName":'shah',"email":'abc@gmail.com',"role":"Student","password":'',"repeatPassword":''},
      {"user_id":4,"firstName":'Shubham',"lastName":'shah',"email":'abc@gmail.com',"role":"Student","password":'',"repeatPassword":''},
      {"user_id":5,"firstName":'Sunny',"lastName":'shah',"email":'abc@gmail.com',"role":"Student","password":'',"repeatPassword":''},
  ];

  displayedColumns: string[] = ['firstName', 'lastName', 'email','action'];
  dataSource = new MatTableDataSource(this.studentDetail);





  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {

  }

  onDeleteStudent(element:any){
    let id = element.user_id;
    alert(`user id : ${id} deleted!`);
    // this.studentService.deleteStudent(id).subscribe(
    //   data => this.router.navigate(['/admin/student'])
    // )

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
