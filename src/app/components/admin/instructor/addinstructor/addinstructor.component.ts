import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Instructor } from 'src/app/classes/instructor';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-addinstructor',
  templateUrl: './addinstructor.component.html',
  styleUrls: ['./addinstructor.component.css']
})
export class AddinstructorComponent implements OnInit {

  instructorForm : any

  message=''
  instructor = new Instructor()
  constructor(private instructorService : InstructorService) { }

  ngOnInit(): void {
    this.instructorForm = new FormGroup({
      "firstName" : new FormControl('',[Validators.required,Validators.pattern('[a-zA-z]*')]),
      "lastName" : new FormControl('',[Validators.required,Validators.pattern('[a-zA-z]*')]),
      "email" : new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      "phoneNo" : new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
      "password" : new FormControl('',[Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,20}$'),Validators.minLength(8)]),
      "confirmPassword" : new FormControl('',[Validators.required])
    })
  }



  addInstructor(){
    this.message = ''
    alert(`${this.instructorForm.value.firstName} is added!`)
    // this.instructor = this.instructorForm.value;
    // this.instructorService.registerInstructorFromRemote(this.instructor).subscribe(
    //   data =>{
    //     console.log("response received!")
    //     if(data!=null){
    //       this.message = 'email is already registered!'
    //     }
    //     else{

    //     }
    //   },
    //   error =>{
    //     console.log("error occured!")
    //   }
    // )
  }

  get firstname(){return this.instructorForm.get('firstName')}
  get lastname(){return this.instructorForm.get('lastName')}
  get email(){return this.instructorForm.get('email')}
  get phoneno(){return this.instructorForm.get('phoneNo')}
  get getpassword(){return this.instructorForm.get('password')}
  get confirmpassword(){return this.instructorForm.get('confirmPassword')}
}
