import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/classes/user';
import { Course } from 'src/app/classes/course';
import { InstructorService } from 'src/app/services/instructor.service';
import { CourseService } from 'src/app/services/course.service';
import { HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-addcourses',
  templateUrl: './addcourses.component.html',
  styleUrls: ['./addcourses.component.css']
})
export class AddcoursesComponent implements OnInit {

  addCourseForm : any
  isLoading:boolean = true;
  courseImage!: File
  instructorDetail : User[] = []
  courseDetail!:Course
  minDate : Date = new Date()
  constructor(private instructorService:InstructorService,private courseService:CourseService,private router:Router,private utilityService:UtilityService) { }

  ngOnInit(): void {
    this.addCourseForm = new FormGroup({
      "courseName" : new FormControl('',[Validators.required]),

      "courseDescription" : new FormControl('',[Validators.required]),
      "coursePrice" : new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      "courseDuration" : new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      // "startDate" : new FormControl('',[Validators.required]),
      // "endDate" : new FormControl('',[Validators.required]),
      "courseDate" : new FormControl('',[Validators.required]),
      // "courseLink" : new FormControl('',[Validators.required]),
      "userId" : new FormControl('',[Validators.required]),
      "courseImages" : new FormControl('',[Validators.required]),
      "courseStatus" : new FormControl('future')
    })
    this.getInstructor();
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
  onSelectFile(event:any){
    console.log("inside method")
    this.courseImage = <File>event.target.files[0];
    console.log(this.courseImage);
  }



  onAddCourse(){
    if(this.addCourseForm.invalid) return;
    this.isLoading = true
    const formData = new FormData();
    formData.append('courseImage',this.courseImage,this.courseImage.name);

    console.log("Form Data:",this.addCourseForm.value);
    // console.log("Date",this.addCourseForm.value.courseDate);


    // console.log("Formatted Date: ",date)
    this.courseDetail = this.addCourseForm.value;
    // this.courseDetail.courseImage = '';
    // this.courseDetail.courseImage = this.courseImage;
    // this.courseDetail.courseDate = new Date(date);
    // console.log("new Date:",new Date(date))
    console.log("Course Detail Object:",this.courseDetail)
    this.courseService.saveCourse(this.courseDetail).subscribe(
      data => {
        console.log("Data",data)
        this.courseDetail = data;
        console.log("course id : ",this.courseDetail.courseId)
        this.courseService.uploadCourseImage(this.courseDetail.courseId,formData).subscribe(
          // data => console.log(data),
          event =>{
            if(event.type === HttpEventType.UploadProgress){
              if(event.total){
                let progress = Math.round((event.loaded / event.total ) * 100);

                console.log("progress: ",progress)
                if(progress === 100){

                  setTimeout(()=>{
                    this.isLoading = false
                    this.utilityService.openSnackBar("Course added!","close")
                    this.router.navigate(['/admin/courses/detail'])
                  },1000)
                }
              }

             }
          },
          error => {
            this.isLoading = false
            console.log(error)
          }
        )
      },
      error => {
        this.isLoading = false
        console.log("Error",error)
      }
    )


  }

  get coursename(){return this.addCourseForm.get('courseName')}
  get coursedesc(){return this.addCourseForm.get('courseDescription')}
  get courseprice(){return this.addCourseForm.get('coursePrice')}
  get courseduration(){return this.addCourseForm.get('courseDuration')}
  get coursedate(){return this.addCourseForm.get('courseDate')}
  get courseinstructor(){return this.addCourseForm.get('userId')}
  get courseimage(){return this.addCourseForm.get('courseImages')}
  get startdate(){return this.addCourseForm.get('startDate')}
  get enddate(){return this.addCourseForm.get('endDate')}


}
