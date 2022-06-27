import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { Instructor } from 'src/app/classes/instructor';
import { InstructorService } from 'src/app/services/instructor.service';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-instructor',
  templateUrl: './update-instructor.component.html',
  styleUrls: ['./update-instructor.component.css']
})
export class UpdateInstructorComponent implements OnInit {

  instructorForm : any | FormGroup
  instructor:Instructor = new Instructor();

  constructor(private instructorService:InstructorService,private activetedRoute:ActivatedRoute,private router:Router) {

  }


  id!:number;


  ngOnInit(): void{

    this.getInstructor();
    this.instructorForm = new FormGroup({

      "firstName" : new FormControl('',[Validators.required,Validators.pattern('[a-zA-z ]*')]),
      "lastName" : new FormControl('',[Validators.required,Validators.pattern('[a-zA-z ]*')]),
      "email" : new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      "phoneNo" : new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),

    })
    console.log(this.instructor)
  }

  getInstructor():any{
    this.id = this.activetedRoute.snapshot.params['id'];
    this.instructorService.getInstructorById(this.id).subscribe(
      data => {
        console.log(data)
        this.instructor = data;
        console.log("instructor data",this.instructor);
        this.instructorForm.patchValue({
          firstName : this.instructor.firstName,
          lastName : this.instructor.lastName,
          email : this.instructor.emailId,
          phoneNo : this.instructor.phoneNum
        })
        console.log("form value",this.instructorForm.value)
      },
      error =>{
          console.log(error);

      },

    )
    return null;

  }
  onUpdateInstructor(){

    this.instructor = this.instructorForm.value;
    alert(this.instructor.firstName);
    this.instructor.tutor_id = this.id;
    console.log(this.instructor.tutor_id)
    console.log(this.instructor)
    // this.instructorService.updateInstructor(this.instructor.tutor_id,this.instructor).subscribe(
    //   data => this.router.navigate(['/admin/instructor/detail'])
    // )

  }
  get firstname(){return this.instructorForm.get('firstName')}
  get lastname(){return this.instructorForm.get('lastName')}
  get email(){return this.instructorForm.get('email')}
  get phoneno(){return this.instructorForm.get('phoneNo')}

}
