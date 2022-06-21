import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { Instructor } from 'src/app/classes/instructor';
import { InstructorService } from 'src/app/services/instructor.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-instructor',
  templateUrl: './update-instructor.component.html',
  styleUrls: ['./update-instructor.component.css']
})
export class UpdateInstructorComponent implements OnInit {

  instructorForm : any

  constructor(private instructorService:InstructorService,private activetedRoute:ActivatedRoute,private router:Router) { }
  instructor:Instructor = new Instructor();

  id:string = '';

  ngOnInit(): void {
    // this.id = this.activetedRoute.snapshot.params['id'];
    // this.instructorService.getInstructorById(this.id).subscribe(
    //   data => this.instructor = data
    // )
    this.instructor.instructor_id = 1;
    this.instructor.firstName = 'parth';
    this.instructor.lastName = 'shah';
    this.instructor.email = 'abc@gmail.com';
    this.instructor.phoneNo = "8694940389"
    this.instructor.password = "abc@1234";

    this.instructorForm = new FormGroup({

      "firstName" : new FormControl(this.instructor.firstName,[Validators.required,Validators.pattern('[a-zA-z ]*')]),
      "lastName" : new FormControl(this.instructor.lastName,[Validators.required,Validators.pattern('[a-zA-z ]*')]),
      "email" : new FormControl(this.instructor.email,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      "phoneNo" : new FormControl(this.instructor.phoneNo,[Validators.required,Validators.pattern('[0-9]{10}')]),

    })

  }

  onUpdateInstructor(){
    alert(typeof this.activetedRoute.snapshot.params['id'])
    this.instructor = this.instructorForm.value;
    alert(this.instructor.firstName);
    // this.instructorService.updateInstructor(this.instructor.instructorId,this.instructor).subscribe(
    //   data => this.router.navigate(['/instructor'])
    // )
    this.router.navigate(['/admin/instructor/detail'])
  }
  get firstname(){return this.instructorForm.get('firstName')}
  get lastname(){return this.instructorForm.get('lastName')}
  get email(){return this.instructorForm.get('email')}
  get phoneno(){return this.instructorForm.get('phoneNo')}

}
