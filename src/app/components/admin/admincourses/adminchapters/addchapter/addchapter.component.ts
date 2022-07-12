import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapters } from 'src/app/classes/chapters';
import { CourseResponse } from 'src/app/classes/course-response';
import { ChapterServices } from 'src/app/services/chapters.service';
import { CourseService } from 'src/app/services/course.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-addchapter',
  templateUrl: './addchapter.component.html',
  styleUrls: ['./addchapter.component.css']
})
export class AddchapterComponent implements OnInit {

  constructor(private chapterService:ChapterServices,private router:Router,private activatedRouter:ActivatedRoute,private utilityService:UtilityService,private courseService:CourseService) { }
  chapterDetail !: Chapters
  courseDetail:CourseResponse = new CourseResponse()
  addChapterForm !: FormGroup | any
  isLoading: boolean = true
  minDate!: Date

  ngOnInit(): void {
    this.addChapterForm = new FormGroup({
      "chapterName" : new FormControl('',[Validators.required]),
      "chapterlink" : new FormControl('',[Validators.required]),
      "chapterDate" : new FormControl('',[Validators.required]),
      "meetingTime" : new FormControl('',[Validators.required])
    })
    this.getCourseDetail()
  }

  private getCourseDetail(){
    let id = this.activatedRouter.snapshot.params['id']
    this.courseService.getSingleCourse(id).subscribe(
      data =>{
        this.courseDetail = data
        this.isLoading = false
        this.compareDate(this.courseDetail.courseDate)
      },
      error =>{
        console.log(error)
        this.isLoading = false
      }
    )
  }

  private compareDate(date:Date){
    let d = new Date(date)
    console.log("Date : ",d)
    console.log("Condition : ",d.getTime() > new Date().getTime() )
    this.minDate = d.getTime() > new Date().getTime() ? d : new Date()
    console.log("Minimum Date :",this.minDate)
  }

  onAddChapter(){
    this.chapterDetail = this.addChapterForm.value;
    this.chapterDetail.courseId = this.activatedRouter.snapshot.params['id'];
    const splitTime:any[] = this.chapterDetail.meetingTime.split(":");
    this.chapterDetail.chapterDate.setHours(splitTime[0])
    this.chapterDetail.chapterDate.setMinutes(splitTime[1])
    this.chapterDetail.chapterDate.setSeconds(0)
    console.log("Chapter detail : ",this.chapterDetail)
    this.chapterService.addChapter(this.chapterDetail).subscribe(
      data => {
        console.log(data)
        this.utilityService.openSnackBar("Chapter added!","close")
        this.router.navigate(['/admin/courses/chapter/detail',this.chapterDetail.courseId])
      },
      error => console.log(error)
    )

  }

  get chaptername(){return this.addChapterForm.get('chapterName')}
  get chapterlink(){return this.addChapterForm.get('chapterlink')}
  get chapterdate(){return this.addChapterForm.get('chapterDate')}
  get meetingtime(){return this.addChapterForm.get('meetingTime')}
}
