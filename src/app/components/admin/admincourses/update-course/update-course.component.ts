import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/classes/course';
import { User } from 'src/app/classes/user';
import { CourseService } from 'src/app/services/course.service';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  constructor(private activatedRouter:ActivatedRoute,private courseService:CourseService,private instructorService:InstructorService) { }

  courseDetail !: Course | any
  updateCourseForm!:FormGroup | any
  isLoading: boolean = true
  minDate: Date = new Date()
  courseImage!: File
  instructorDetail : User[] = []

  ngOnInit(): void {
    this.updateCourseForm = new FormGroup({
      "courseName" : new FormControl('',[Validators.required]),
      "courseDescription" : new FormControl('',[Validators.required]),
      "coursePrice" : new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      "courseDuration" : new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      "courseDate" : new FormControl('',[Validators.required]),
      "courseTutorId" : new FormControl('',[Validators.required]),
      "courseImage" : new FormControl(''),
      "courseStatus" : new FormControl('future')
    })
    this.getCourse();
  }

  onSelectFile(event:any){
    console.log("inside method")
    this.courseImage = <File>event.target.files[0];
    console.log(this.courseImage);
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
        this.getInstructor()
        this.isLoading = false
      },
      error =>{
        console.log(error)
        this.isLoading = false
      }
    )

  }

  private getInstructor(){
    this.instructorService.getInstructorDetails().subscribe(
      data =>{
        console.log(data);
        this.instructorDetail = data;
        this.isLoading = false;
        console.log("Instructor detail object : ",this.instructorDetail)
      },
      error =>{
        this.isLoading = false;
        console.log(error);
      }
    )
  }

  onUpdateCourse(){

  }

  get coursename(){return this.updateCourseForm.get('courseName')}
  get courseprice(){return this.updateCourseForm.get('coursePrice')}
  get courseduration(){return this.updateCourseForm.get('courseDuration')}
  get coursedate(){return this.updateCourseForm.get('courseDate')}
  get coursedesc(){return this.updateCourseForm.get('courseDescription')}
  get courseimage(){return this.updateCourseForm.get('courseImage')}
  get courseinstructor(){return this.updateCourseForm.get('userId')}

}
