import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CourseResponse } from 'src/app/classes/course-response';
import { User } from 'src/app/classes/user';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';
import { UtilityService } from 'src/app/services/utility.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!:MatPaginator
  user:User|any;
  courseDetails: CourseResponse[] | any = [];
  isLoading : boolean = false
  displayedColumns: string[] = ['courseImage', 'courseDate','courseName','coursePrice', 'action'];
  dataSource: MatTableDataSource<CourseResponse[]> | any;

  constructor(private courseService:CourseService,private confirmDialogService:ConfirmDialogService,private utilityService:UtilityService,private router:Router,private userService:UserService) { }


  ngOnInit(): void {
    this.isLoading=true
    this.user=this.userService.getUser()
    this.getAllCourses()
    
   
   
  }

  private getAllCourses(){
    this.courseService.getAllCourses().subscribe(
      data =>{
        this.courseDetails = data;
        if(this.user.role==='tutor'){
          
          this.courseDetails=this.courseDetails.filter((course:CourseResponse)=> {
            
            return course.userId==this.user.userId
          })
        }
        
        this.dataSource = new MatTableDataSource(this.courseDetails);
        this.dataSource.paginator=this.paginator
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



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
