import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapters } from 'src/app/classes/chapters';
import { ChapterServices } from 'src/app/services/chapters.service';

@Component({
  selector: 'app-addchapter',
  templateUrl: './addchapter.component.html',
  styleUrls: ['./addchapter.component.css']
})
export class AddchapterComponent implements OnInit {

  constructor(private chapterService:ChapterServices,private router:Router,private activatedRouter:ActivatedRoute) { }
  chapterDetail !: Chapters
  addChapterForm !: FormGroup | any

  ngOnInit(): void {
    this.addChapterForm = new FormGroup({
      "chapterName" : new FormControl('',[Validators.required]),
      "chapterlink" : new FormControl('',[Validators.required]),
      "chapterDate" : new FormControl('',[Validators.required]),
      "meetingTime" : new FormControl('',[Validators.required])
    })
  }

  onAddChapter(){
    this.chapterDetail = this.addChapterForm.value;
    this.chapterDetail.courseId = this.activatedRouter.snapshot.params['id'];
    console.log("Chapter detail : ",this.chapterDetail)
    // this.chapterService.addChapter(this.chapterDetail).subscribe(
    //   data => console.log(data),
    //   error => console.log(error)
    // )

  }

  get chaptername(){return this.addChapterForm.get('chapterName')}
  get chapterlink(){return this.addChapterForm.get('chapterlink')}
  get chapterdate(){return this.addChapterForm.get('chapterDate')}
  get meetingtime(){return this.addChapterForm.get('meetingTime')}
}
