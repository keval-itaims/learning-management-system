import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/classes/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  constructor(private activatedRouter:ActivatedRoute,private courseService:CourseService) { }

  courseDetail !: Course | any
  updateCourseForm!:FormGroup

  ngOnInit(): void {
    this.updateCourseForm = new FormGroup({
      "courseName" : new FormControl('',[Validators.required]),

      "courseDescription" : new FormControl('',[Validators.required]),
      "coursePrice" : new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      "courseDuration" : new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      "courseDate" : new FormControl('',[Validators.required]),
      "courseTutorId" : new FormControl('',[Validators.required]),
      "courseImages" : new FormControl('',[Validators.required]),
      "courseStatus" : new FormControl('future')
    })
    // this.getCourse();
  }
  private getCourse(){
    let id = this.activatedRouter.snapshot.params['id'];
    console.log("Id in update course: ",id)
    this.courseService.getSingleCourse(id).subscribe(
      data =>{
        console.log(data),
        this.courseDetail = data;
        console.log(this.courseDetail)
        this.updateCourseForm.patchValue({
          courseName : this.courseDetail.courseName,
          coursePrice : this.courseDetail.coursePrice,
          courseDuration : this.courseDetail.courseDuration,
          courseDate : this.courseDetail.courseDate,
          courseTutorId : this.courseDetail.courseTutorId,
          courseDescription : this.courseDetail.courseDescription,
        })
      },
      error =>{
        console.log(error)
      }
    )

  }

  onUpdateCourse(){

  }

}
