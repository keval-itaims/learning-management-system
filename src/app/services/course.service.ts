import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../classes/course';
import { CourseResponse } from '../classes/course-response';
import { UserReview } from '../classes/user-review';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url = environment.url;
  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<CourseResponse[]>{
    return this.http.get<CourseResponse[]>(`${this.url}/course`);
  }
  getSingleCourse(courseId: number): Observable<CourseResponse>{
    return this.http.get<CourseResponse>(`${this.url}/course/${courseId}`);
  }
  saveCourse(course: Course): Observable<Course>{
    return this.http.post<Course>(`${this.url}/course`, course);
  }
  updateCourse(course: Course): Observable<Course>{
    console.log("update course service : ",course)
    return this.http.put<Course>(`${this.url}/course`,course);
  }
  deleteCourse(courseId: number): Observable<string>{
    return this.http.delete<string>(`${this.url}/course/${courseId}`);
  }
  public uploadCourseImage(id:number,formData:FormData):Observable<HttpEvent<string[]>>{
    console.log("Id in upload image service",id)
    return this.http.post<string[]>(`http://localhost:8080/course/save-course/${id}`,formData,{
      reportProgress:true,
      observe:'events'
    })
  }

  addReview(userReview: UserReview): Observable<UserReview>{
    return this.http.post<UserReview>(`${this.url}/user-reviews/post-review`, userReview);
  }
  getReviews(id: number): Observable<UserReview[]>{
    return this.http.get<UserReview[]>(`${this.url}/${id}`);
  }
}
