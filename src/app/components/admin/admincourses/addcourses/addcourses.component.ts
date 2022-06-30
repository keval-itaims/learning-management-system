import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcourses',
  templateUrl: './addcourses.component.html',
  styleUrls: ['./addcourses.component.css']
})
export class AddcoursesComponent implements OnInit {

  addCourseForm !: FormGroup
  isLoading:boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.addCourseForm = new FormGroup({
      "courseName" : new FormControl('',[Validators.required]),

      "courseDescription" : new FormControl('',[Validators.required]),
      "coursePrice" : new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      "courseDuration" : new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
      "courseDate" : new FormControl('',[Validators.required])
    })
  }

  get coursename(){return this.addCourseForm.get('courseName')}
  get coursedesc(){return this.addCourseForm.get('courseDescription')}
  get courseprice(){return this.addCourseForm.get('coursePrice')}
  get courseduration(){return this.addCourseForm.get('courseDuration')}
  get coursedate(){return this.addCourseForm.get('courseDate')}


}
