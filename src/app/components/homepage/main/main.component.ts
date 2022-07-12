import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseResponse } from 'src/app/classes/course-response';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  courses: CourseResponse[]|any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courses = this.route.snapshot.data['courses'];
  }

}
