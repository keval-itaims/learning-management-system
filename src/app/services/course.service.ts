import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../classes/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url = environment.url;
  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.url}/course`);
  }
  getSingleCourse(courseId: number): Observable<Course>{
    return this.http.get<Course>(`${this.url}/course/${courseId}`);
  }
  saveCourse(course: Course): Observable<Course>{
    return this.http.post<Course>(`${this.url}/course`, course);
  }
  updateCourse(course: Course): Observable<Course>{
    return this.http.put<Course>(`${this.url}/course`, course);
  }
  deleteCourse(courseId: number): Observable<string>{
    return this.http.delete<string>(`${this.url}/course/${courseId}`);
  }
}
