import { Component, OnInit } from '@angular/core';
import {faFilter} from '@fortawesome/free-solid-svg-icons'
import { ActivatedRoute, Router } from '@angular/router';
import { CourseResponse } from 'src/app/classes/course-response';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  faFilter = faFilter;
  allCourses: CourseResponse[] = [];
  courses: CourseResponse[] = [];
  copy: CourseResponse[] = [];

  search = ''
  isLoading = false;
  courseType = 'future'
  sortType = 'relevant'
  constructor(private route: ActivatedRoute,
    private courseService: CourseService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.courseService.getAllCourses().subscribe(
      (data) => {
        this.isLoading = false;
        this.allCourses = data;
        this.onCourseTypeChanged();
        this.search = (history.state.search);
      },
      (error) => {
        this.isLoading = false;
        console.log(error)
      }
    )
  }
  onCourseTypeChanged(){
    this.filterCourseType(this.courseType)
  }
  onSortTypeChanged(){
    if(this.sortType === 'az')
    this.courses = this.courses.sort((a, b) => a.courseName.localeCompare(b.courseName));
    else if(this.sortType === 'za')
    this.courses = this.courses.sort((a, b) => b.courseName.localeCompare(a.courseName));
    else if(this.sortType === 'price')
    this.courses = this.courses.sort((a, b) => a.coursePrice - b.coursePrice);
    else
      this.courses = [...this.copy];
  }
  filterCourseType(status: string){
    this.courses = this.allCourses.filter(item => item.courseStatus === status)
    this.copy = [...this.courses];
    this.sortType = 'relevant'
  }
}
