import { Component, OnInit } from '@angular/core';
import {faFilter} from '@fortawesome/free-solid-svg-icons'
import {CourseService} from 'src/app/services/course.service'
import { Course } from 'src/app/classes/course';
import { ActivatedRoute, Router } from '@angular/router';

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
  courseType = 'present'
  sortType = 'relevant'
  constructor(private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
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
    else if(this.courseType === 'price')
      this.courses = this.courses.sort((a, b) => a.coursePrice - b.coursePrice);
    else
      this.courses = this.copy;
  }
  filterCourseType(status: string){
    this.courses = this.allCourses.filter(item => item.courseStatus === status)
    this.copy = this.courses;
  }
  onSearch(){
    this.courses = this.courses.filter(item => 
      item.courseName.toLocaleLowerCase().match(this.search.trim().toLocaleLowerCase()))
  }
}
