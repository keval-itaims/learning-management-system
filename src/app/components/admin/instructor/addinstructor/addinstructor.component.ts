import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Instructor } from 'src/app/classes/instructor';
import { User } from 'src/app/classes/user';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-addinstructor',
  templateUrl: './addinstructor.component.html',
  styleUrls: ['./addinstructor.component.css']
})
export class AddinstructorComponent implements OnInit {

  instructorForm : any

  message=''
  profileImage!:File
  instructor = new User()
  constructor(private instructorService : InstructorService,private router:Router) { }

  ngOnInit(): void {
    this.instructorForm = new FormGroup({
      "firstName" : new FormControl('',[Validators.required,Validators.pattern('[a-zA-z ]*')]),
      "lastName" : new FormControl('',[Validators.required,Validators.pattern('[a-zA-z ]*')]),
      "emailId" : new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      "phoneNum" : new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')]),
      "password" : new FormControl('',[Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,20}$'),Validators.minLength(8)]),
      "confirmPassword" : new FormControl('',[Validators.required]),

    })
  }

  onFileSelected(event:any){
    this.profileImage = <File>event.target.files[0];
    console.log("profile Image : ",this.profileImage)

  }

  addInstructor(){
    this.message = ''
    const formData = new FormData();
    formData.append('profileImage',this.profileImage,this.profileImage.name);
    // alert(`${this.instructorForm.value.firstName} is added!`)
    this.instructor = this.instructorForm.value;
    this.instructor.role = "tutor";
    console.log(this.instructor);
    this.instructorService.registerInstructorFromRemote(this.instructor).subscribe(
      data =>{
        console.log("response received!");
        console.log(data);
        if(data!=null){
          this.message = 'email is already registered!'
          this.instructor = data;
          console.log("id",this.instructor.user_id);
          this.instructorService.uploadProfileImage(this.instructor.user_id,formData).subscribe(
            // data => console.log("Data in upload image",data),
            event =>{
              
              if(event.type=== HttpEventType.UploadProgress){
              //   if(Math.round(event.loaded / event.total) * 100)
               }
            },
            error => console.log(error)

          )

        }
        else{


          // this.router.navigate(['admin/instructor/detail'])
        }
      },
      error =>{
        alert("error occured!")
      }
    )
  }

  onAddInstructor(){
    this.addInstructor();
  }

  goToInstructorList(){
    this.router.navigate(["/instructor-detail"]);
  }

  get firstname(){return this.instructorForm.get('firstName')}
  get lastname(){return this.instructorForm.get('lastName')}
  get email(){return this.instructorForm.get('emailId')}
  get phoneno(){return this.instructorForm.get('phoneNum')}
  get getpassword(){return this.instructorForm.get('password')}
  get confirmpassword(){return this.instructorForm.get('confirmPassword')}
  get profileimage(){return this.instructorForm.get('profileImage')}
}
