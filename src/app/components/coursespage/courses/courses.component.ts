import { Component, OnInit } from '@angular/core';
import {faFilter} from '@fortawesome/free-solid-svg-icons'
import { ActivatedRoute, Router } from '@angular/router';
import { CourseResponse } from 'src/app/classes/course-response';

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
  courseType = 'future'
  sortType = 'relevant'
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.allCourses = (<CourseResponse[]>(this.route.snapshot.data['courses']));
    console.log(this.allCourses);
    this.onCourseTypeChanged();
    this.search = (history.state.search);
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
