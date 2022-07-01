import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/classes/user';
import { InstructorService } from 'src/app/services/instructor.service';

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
  constructor(private instructorService:InstructorService) { }

  ngOnInit(): void {
    this.addCourseForm = new FormGroup({
      "courseName" : new FormControl('',[Validators.required]),

      "courseDescription" : new FormControl('',[Validators.required]),
      "coursePrice" : new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      // "courseDuration" : new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      "startDate" : new FormControl('',[Validators.required]),
      "endDate" : new FormControl('',[Validators.required]),
      // "courseDate" : new FormControl('',[Validators.required]),
      // "courseLink" : new FormControl('',[Validators.required]),
      "courseInstructor" : new FormControl('',[Validators.required]),
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
    alert("method called!")
    console.log("Form Data:",this.addCourseForm.value);

  }

  get coursename(){return this.addCourseForm.get('courseName')}
  get coursedesc(){return this.addCourseForm.get('courseDescription')}
  get courseprice(){return this.addCourseForm.get('coursePrice')}
  // get courseduration(){return this.addCourseForm.get('courseDuration')}
  get coursedate(){return this.addCourseForm.get('courseDate')}
  get courseinstructor(){return this.addCourseForm.get('courseInstructor')}
  get courseimage(){return this.addCourseForm.get('courseImage')}
  get startdate(){return this.addCourseForm.get('startDate')}
  get enddate(){return this.addCourseForm.get('endDate')}


}
