import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import { CourseResponse } from '../classes/course-response';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root'
})
export class HomepageResolver implements Resolve<CourseResponse[]> {
  
  constructor(private courseService: CourseService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CourseResponse[]> {
    return this.courseService.getAllCourses();
  }
}
