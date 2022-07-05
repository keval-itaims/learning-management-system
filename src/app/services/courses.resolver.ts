import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {CourseService} from './course.service'
import { Observable } from 'rxjs';
import { CourseResponse } from '../classes/course-response';

@Injectable({
  providedIn: 'root'
})
export class CoursesResolver implements Resolve<CourseResponse[]> {

  constructor(private courseService: CourseService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CourseResponse[]> {
    return this.courseService.getAllCourses();
  }
}
