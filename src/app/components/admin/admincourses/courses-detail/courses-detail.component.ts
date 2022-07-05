import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CourseResponse } from 'src/app/classes/course-response';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailsComponent implements OnInit {

  courseDetails!:CourseResponse[] | any
  displayedColumns: string[] = ['courseImage', '', 'lastName', 'email', 'phoneNo', 'action'];
  dataSource: MatTableDataSource<CourseResponse[]> | any;

  constructor(private courseService:CourseService) { }


  ngOnInit(): void {
    this.getAllCourses()
  }

  private getAllCourses(){
    this.courseService.getAllCourses().subscribe(
      data =>{
        this.courseDetails = data;
      },
      error => console.log(error)
    )
  }

}
