import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { Instructor } from 'src/app/classes/instructor';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-update-instructor',
  templateUrl: './update-instructor.component.html',
  styleUrls: ['./update-instructor.component.css']
})
export class UpdateInstructorComponent implements OnInit {

  constructor(private instructorService:InstructorService,private activetedRoute:ActivatedRoute) { }
  instructor:Instructor = new Instructor();

  id:string = '';

  ngOnInit(): void {
    // this.id = this.activetedRoute.snapshot.params['id'];
    // this.instructorService.getInstructorById(this.id).subscribe(
    //   data => this.instructor = data
    // )
    this.instructor.instructorId = '1'
    this.instructor.firstName = 'parth';
    this.instructor.lastName = 'shah';
    this.instructor.email = 'abc@gmail.com';
    this.instructor.password = "abc@1234";
  }

}
