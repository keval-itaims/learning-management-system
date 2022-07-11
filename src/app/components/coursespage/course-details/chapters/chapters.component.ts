import { Component, Input, OnInit } from '@angular/core';
import { Chapters } from 'src/app/classes/chapters';
import { CourseResponse } from 'src/app/classes/course-response';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  @Input() course: CourseResponse|any;
  chapters: Chapters[] | any;
  constructor() { }

  ngOnInit(): void {
    this.chapters = this.course.chapters;
  }

}
