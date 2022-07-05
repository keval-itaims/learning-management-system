import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/classes/user';
import { Course } from 'src/app/classes/course';
import { InstructorService } from 'src/app/services/instructor.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-addcourses',
  templateUrl: './addcourses.component.html',
  styleUrls: ['./addcourses.component.css']
})
export class AddcoursesComponent implements OnInit {

  addCourseForm : any
  isLoading:boolean = true;
  courseImage!: File
  instructorDetail !: User[]
  courseDetail!:Course
  constructor(private instructorService:InstructorService,private courseService:CourseService) { }

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
      "courseTutorId" : new FormControl('',[Validators.required]),
      "courseImage" : new FormControl('',[Validators.required])
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

  formateDate(date:Date){
    console.log("Date tostring: ",date.toDateString())
    // const dateObj =  new Date(date)
    const d  = date.getDate()
    // console.log("to locale string : ",d.toLocaleString())
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    console.log(`date in fun : ${year}-${month}-${d}`)
    return `${year}-${month}-${d}`;

  }

  onAddCourse(){
    if(this.addCourseForm.invalid) return;
    const formData = new FormData();
    formData.append('courseImage',this.courseImage,this.courseImage.name);
    alert("method called!")
    console.log("Form Data:",this.addCourseForm.value);
    // console.log("Date",this.addCourseForm.value.courseDate);

    let date=this.formateDate(this.addCourseForm.value.courseDate);
    // console.log("Formatted Date: ",date)
    this.courseDetail = this.addCourseForm.value;
    this.courseDetail.courseImage = '';
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
          data => console.log(data),
          error => console.log(error)
        )
      },
      error => {
        console.log("Error",error)
      }
    )


  }

  get coursename(){return this.addCourseForm.get('courseName')}
  get coursedesc(){return this.addCourseForm.get('courseDescription')}
  get courseprice(){return this.addCourseForm.get('coursePrice')}
  get courseduration(){return this.addCourseForm.get('courseDuration')}
  get coursedate(){return this.addCourseForm.get('courseDate')}
  get courseinstructor(){return this.addCourseForm.get('courseTutorId')}
  get courseimage(){return this.addCourseForm.get('courseImage')}
  get startdate(){return this.addCourseForm.get('startDate')}
  get enddate(){return this.addCourseForm.get('endDate')}


}
