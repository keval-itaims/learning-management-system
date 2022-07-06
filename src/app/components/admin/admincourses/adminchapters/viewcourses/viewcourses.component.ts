import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CourseResponse } from 'src/app/classes/course-response';
import { ChapterServices } from 'src/app/services/chapters.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-viewcourses',
  templateUrl: './viewcourses.component.html',
  styleUrls: ['./viewcourses.component.css']
})
export class ViewcoursesComponent implements OnInit {

  courseDetails!:CourseResponse[] | any
  displayedColumns: string[] = ['courseImage', 'courseDate','courseName', 'action'];
  dataSource: MatTableDataSource<CourseResponse[]> | any;

  constructor(private courseService:CourseService,private chapterService:ChapterServices,private router:Router) { }

  ngOnInit(): void {
    // this.getAllCourses()
  }

  private getAllCourses(){
    this.courseService.getAllCourses().subscribe(
      data =>{
        console.log(data)
        this.courseDetails = data;
      },
      error => console.log(error)
    )
  }

  onViewChapters(element:any){
    let id = element.courseId;
    this.router.navigate(['admin/courses/chapter/detail',id])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
