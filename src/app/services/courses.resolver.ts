import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {CourseService} from './course.service'
import { Observable } from 'rxjs';
import { CoursesResponse } from '../classes/courses-response';

@Injectable({
  providedIn: 'root'
})
export class CoursesResolver implements Resolve<CoursesResponse[]> {

  constructor(private courseService: CourseService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CoursesResponse[]> {
    return this.courseService.getAllCourses();
  }
}
