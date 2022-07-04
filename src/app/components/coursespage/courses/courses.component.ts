import { Component, OnInit } from '@angular/core';
import {faFilter} from '@fortawesome/free-solid-svg-icons'
import {CourseService} from 'src/app/services/course.service'
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesResponse } from 'src/app/classes/courses-response';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  faFilter = faFilter;
  allCourses: CoursesResponse[] = [];
  courses: CoursesResponse[] = [];
  copy: CoursesResponse[] = [];

  search = ''
  courseType = 'future'
  sortType = 'relevant'
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.allCourses = (<CoursesResponse[]>(this.route.snapshot.data['courses']));
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
