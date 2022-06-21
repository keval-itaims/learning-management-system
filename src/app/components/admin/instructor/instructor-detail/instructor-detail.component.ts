import { Component, OnInit} from '@angular/core';
import { Instructor } from 'src/app/classes/instructor';
import {MatTableDataSource} from '@angular/material/table';
import { InstructorService } from 'src/app/services/instructor.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit {

  instructorDetail : Instructor[]=[

    {instructorId:'1',firstName:'Parth',lastName:'shah',email:'abc@gmail.com',phoneNo:'7685958050',password:'abc@123'},
    {instructorId:'2',firstName:'Harsh',lastName:'shah',email:'abc@gmail.com',phoneNo:'7685958050',password:'abc@123'},
    {instructorId:'3',firstName:'Sunny',lastName:'shah',email:'abc@gmail.com',phoneNo:'7685958050',password:'abc@123'},
    {instructorId:'4',firstName:'Shubham',lastName:'shah',email:'abc@gmail.com',phoneNo:'7685958050',password:'abc@123'},
    {instructorId:'5',firstName:'Keval',lastName:'shah',email:'abc@gmail.com',phoneNo:'7685958050',password:'abc@123'},
  ];


  constructor(private instructorService:InstructorService,private router:Router) { }

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNo','action'];
  dataSource = new MatTableDataSource(this.instructorDetail);

  ngOnInit(): void {
    //this.getInstructor()

  }

  private getInstructor(){
      this.instructorService.getInstructorDetails().subscribe(
        data =>{
          this.instructorDetail = data;
        },
        error =>{

        }
      )
  }

  updateInstructor(element:any){
    let id = element.instructorId;
    this.router.navigate(['update-instructor',id]);

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
