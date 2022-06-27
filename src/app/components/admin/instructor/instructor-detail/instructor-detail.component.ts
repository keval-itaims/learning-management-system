import { Component, OnInit} from '@angular/core';
import { Instructor } from 'src/app/classes/instructor';
import {MatTableDataSource} from '@angular/material/table';
import { InstructorService } from 'src/app/services/instructor.service';
import { Router } from '@angular/router';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { User } from 'src/app/classes/user';




@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit {

  // instructorDetail : Instructor[]=[

  //   {tutor_id:1,firstName:'Parth',lastName:'shah',email:'abc@gmail.com',phoneNo:'7685958050',password:'abc@123'},
  //   {tutor_id:2,firstName:'Harsh',lastName:'shah',email:'abc@gmail.com',phoneNo:'7685958050',password:'abc@123'},
  //   {tutor_id:3,firstName:'Sunny',lastName:'shah',email:'abc@gmail.com',phoneNo:'7685958050',password:'abc@123'},
  //   {tutor_id:4,firstName:'Shubham',lastName:'shah',email:'abc@gmail.com',phoneNo:'7685958050',password:'abc@123'},
  //   {tutor_id:5,firstName:'Keval',lastName:'shah',email:'abc@gmail.com',phoneNo:'7685958050',password:'abc@123'},
  // ];

  instructorDetail !: User[];
  loading_data:boolean = true;


  constructor(private instructorService:InstructorService,private router:Router,private confirmDialogService:ConfirmDialogService) { }

  ngOnInit(): void {

    this.getInstructor()

  }

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNo','action'];
  dataSource:MatTableDataSource<Instructor[]> | any;


  private getInstructor(){
      this.instructorService.getInstructorDetails().subscribe(
        data =>{

          console.log(data);
          this.loading_data = false;
          this.instructorDetail = data;
          this.dataSource = new MatTableDataSource(this.instructorDetail);
          console.log(this.instructorDetail)
        },
        error =>{

        }
      )
  }

  onUpdateInstructor(element:any){
    let id = element.tutor_id;
    this.router.navigate(['/admin/instructor/update/',id]);

  }

  onDeleteInstrcutor(element:any){
    let id = element.tutor_id;



    this.confirmDialogService.openConfirmDialog({
        title: 'Delete Instructor',
        message:'Are you sure?',
        confirmText:'Delete',
        cancleText:'Cancle'
    }).subscribe(
      result =>{
        if(result){
          this.instructorService.deleteInstructor(id).subscribe(
            data => this.router.navigate(['admin/instructor/detail'])
          )
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
