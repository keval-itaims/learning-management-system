import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { Instructor } from 'src/app/classes/instructor';
import { InstructorService } from 'src/app/services/instructor.service';
import { User } from 'src/app/classes/user';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-instructor',
  templateUrl: './update-instructor.component.html',
  styleUrls: ['./update-instructor.component.css']
})
export class UpdateInstructorComponent implements OnInit {

  instructorForm : any | FormGroup
  instructor:User = new User();

  constructor(private instructorService:InstructorService,private activetedRoute:ActivatedRoute,private router:Router) {

  }


  id!:number;
  isLoading : boolean = true;

  ngOnInit(): void{


    this.instructorForm = new FormGroup({

      "firstName" : new FormControl('',[Validators.required,Validators.pattern('[a-zA-z ]*')]),
      "lastName" : new FormControl('',[Validators.required,Validators.pattern('[a-zA-z ]*')]),
      "emailId" : new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      "phoneNum" : new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),



    })
    this.getInstructor();
    console.log(this.instructor)
  }

  getInstructor():any{
    console.log("get method called!")
    this.id = this.activetedRoute.snapshot.params['id'];
    console.log("id is: ",this.id)
    this.instructorService.getInstructorById(this.id).subscribe(
      data => {
        console.log(data)
        this.instructor = data;
        console.log("instructor data",this.instructor);
        this.instructorForm.patchValue({
          firstName : this.instructor.firstName,
          lastName : this.instructor.lastName,
          emailId : this.instructor.emailId,
          phoneNum : this.instructor.phoneNum
        })
        this.isLoading = false;
        console.log("form value",this.instructorForm.value)
      },
      error =>{
          console.log(error);
          this.isLoading = false;

      },

    )
    return null;

  }
  onUpdateInstructor(){

    this.instructor.firstName = this.instructorForm.value.firstName;
    this.instructor.lastName = this.instructorForm.value.lastName;
    this.instructor.emailId = this.instructorForm.value.emailId;
    this.instructor.phoneNum = this.instructorForm.value.phoneNum;
    alert(this.instructor.firstName);
    this.instructor.user_id = this.id;
    // console.log(this.instructor.tutor_id)
    console.log(this.instructor.user_id)
    console.log(this.instructor)
    this.instructorService.updateInstructor(this.instructor).subscribe(
      data => this.router.navigate(['/admin/instructor/detail'])
    )

  }
  get firstname(){ return this.instructorForm.get('firstName')}
  get lastname(){return this.instructorForm.get('lastName')}
  get email(){return this.instructorForm.get('emailId')}
  get phoneno(){return this.instructorForm.get('phoneNum')}

}
