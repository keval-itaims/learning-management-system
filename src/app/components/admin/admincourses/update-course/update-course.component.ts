import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/classes/course';
import { CourseResponse } from 'src/app/classes/course-response';
import { User } from 'src/app/classes/user';
import { CourseService } from 'src/app/services/course.service';
import { InstructorService } from 'src/app/services/instructor.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  constructor(private activatedRouter:ActivatedRoute,private courseService:CourseService,private instructorService:InstructorService,private utilityService:UtilityService,private router:Router) { }

  // courseDetail !: Course | any
  courseDetail: CourseResponse =  new CourseResponse()
  course = new Course()
  updateCourseForm!:FormGroup | any
  isLoading: boolean = true
  minDate: Date = new Date()
  courseImage!: File
  instructorDetail: User[] = []
  ngOnInit(): void {
    this.updateCourseForm = new FormGroup({
      "courseName" : new FormControl('',[Validators.required]),
      "courseDescription" : new FormControl('',[Validators.required]),
      "coursePrice" : new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      "courseDuration" : new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      "courseDate" : new FormControl('',[Validators.required]),
      "userId" : new FormControl('',[Validators.required]),
      "courseImage" :new FormControl(''),
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
          userId : this.courseDetail.userId,
          courseDescription : this.courseDetail.courseDescription,
          courseImage : this.courseDetail.courseImage
        })
        this.getInstructor()

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
    this.course= this.updateCourseForm.value;
    this.course.courseId = this.courseDetail.courseId
    console.log("Updated  course Detail : ",this.course)


    this.courseService.updateCourse(this.course).subscribe(
      data =>{
        console.log("Data : ",data)

        if(this.courseImage){
          const formData = new FormData();
          formData.append('courseImage',this.courseImage,this.courseImage.name);
          console.log("Course Id : ",this.course.courseId)
          this.courseService.uploadCourseImage(this.course.courseId,formData).subscribe(
            // data => console.log(data),
            event =>{
              console.log(event)
              if(event.type == HttpEventType.UploadProgress){
                let progress = 0
                if(event.total){
                  console.log("Event total : ",event.total)
                  console.log("Event loaded : ",event.loaded)
                  progress = Math.round((event.loaded / event.total ) * 100);
                  console.log("progress: ",progress)
                }
                if(progress == 100){
                    setTimeout(()=>{
                      this.isLoading = false
                      this.utilityService.openSnackBar("Course updated!","close")
                      this.router.navigate(['/admin/courses/detail'])
                    },1500)
                }


               }
            },
            error => {
              this.isLoading = false
              console.log(error)
            }
          )
        }
        this.isLoading = false
        this.utilityService.openSnackBar("Course updated!","close")
        this.router.navigate(['/admin/courses/detail'])
      },
      error =>{
        this.isLoading = false
        console.log(error)
      }
    )
  }

  get coursename(){return this.updateCourseForm.get('courseName')}
  get courseprice(){return this.updateCourseForm.get('coursePrice')}
  get courseduration(){return this.updateCourseForm.get('courseDuration')}
  get coursedate(){return this.updateCourseForm.get('courseDate')}
  get coursedesc(){return this.updateCourseForm.get('courseDescription')}
  // get courseimage(){return this.updateCourseForm.get('courseImage')}
  get courseinstructor(){return this.updateCourseForm.get('userId')}

}
