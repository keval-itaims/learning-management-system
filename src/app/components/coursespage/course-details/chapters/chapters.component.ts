import { Component, Input, OnInit } from '@angular/core';
import { Chapters } from 'src/app/classes/chapters';
import { CourseResponse } from 'src/app/classes/course-response';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css'],
})
export class ChaptersComponent implements OnInit {
  check = faCheckCircle;
  today = new Date();
  @Input() course: CourseResponse | any;
  chapters: Chapters[] | any;
  constructor() {}

  ngOnInit(): void {
    this.chapters = this.course.chapters;
    this.sortChapters();
  }
  sortChapters() {
    this.chapters = this.chapters.sort(
      (a: Chapters, b: Chapters) =>
        new Date(b.chapterDate).getTime() - new Date(a.chapterDate).getTime()
    );
  }
  compareDateCSS(chapterDate: string) {
    let d = new Date(chapterDate);
    return this.today.toLocaleDateString() == d.toLocaleDateString()
      ? 'current'
      : '';
  }
  compareDate(chapterDate: string) {
    let d = new Date(chapterDate);
    let previous = new Date().setDate(this.today.getDate() - 1);
    return previous <= d.getTime() ? false : true;
  }
}
