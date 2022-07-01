import { Component, OnInit } from '@angular/core';
import {faFilter} from '@fortawesome/free-solid-svg-icons'
import {CourseService} from 'src/app/services/course.service'
import { Course } from 'src/app/classes/course';
import { ActivatedRoute, Router } from '@angular/router';
import { test } from './test';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  faFilter = faFilter;
  allCourses: Course[] = [];
  courses: Course[] = [];
  copy: Course[] = [];

  search = ''
  courseType = 'future'
  sortType = 'relevant'
  constructor(private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.allCourses = test;
    this.onCourseTypeChanged();
    this.search = (history.state.search);
    // if(this.search?.trim())this.onSearch();
    // this.courseService.getAllCourses().subscribe(
    //   (data) => {
    //     console.log(data)
    //     this.allCourses = data;
    //     this.onCourseTypeChanged()
    //     this.search = history.state.search
    //     this.onSearch()
    //   },
    //   (error) => console.log(error)
    // )
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
