import { Component, OnInit} from '@angular/core';
import { Instructor } from 'src/app/classes/instructor';
import {MatTableDataSource} from '@angular/material/table';
import { InstructorService } from 'src/app/services/instructor.service';
import { Router } from '@angular/router';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';




@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit {

  instructorDetail : Instructor[]=[

    {instructor_id:1,firstName:'Parth',lastName:'shah',email:'abc@gmail.com',phoneNo:'7685958050',password:'abc@123'},
    {instructor_id:2,firstName:'Harsh',lastName:'shah',email:'abc@gmail.com',phoneNo:'7685958050',password:'abc@123'},
    {instructor_id:3,firstName:'Sunny',lastName:'shah',email:'abc@gmail.com',phoneNo:'7685958050',password:'abc@123'},
    {instructor_id:4,firstName:'Shubham',lastName:'shah',email:'abc@gmail.com',phoneNo:'7685958050',password:'abc@123'},
    {instructor_id:5,firstName:'Keval',lastName:'shah',email:'abc@gmail.com',phoneNo:'7685958050',password:'abc@123'},
  ];


  constructor(private instructorService:InstructorService,private router:Router,private confirmDialogService:ConfirmDialogService) { }

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

  onUpdateInstructor(element:any){
    let id = element.instructor_id;
    alert(id);
    this.router.navigate(['/admin/instructor/update/',id]);

  }

  onDeleteInstrcutor(element:any){
    // let id = element.instructor_id;
    // alert(id)
    // this.router.navigate(['admin/instructor/detail'])
    // this.instructorService.deleteInstructor(id).subscribe(
    //   data => this.router.navigate(['admin/instructor/detail'])
    // )
    this.confirmDialogService.openConfirmDialog({
        title: 'Delete Instructor',
        message:'Are you sure?',
        confirmText:'Delete',
        cancleText:'Cancle'
    }).subscribe(
      result =>{
        if(result){
          alert("user deleted!")
        }
        else{
          alert("user not deleted!")
        }

      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
