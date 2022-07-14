import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapters } from 'src/app/classes/chapters';
import { ChapterServices } from 'src/app/services/chapters.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-update-chapter',
  templateUrl: './update-chapter.component.html',
  styleUrls: ['./update-chapter.component.css']
})
export class UpdateChapterComponent implements OnInit {

  constructor(private chapterService:ChapterServices,private router:Router,private activatedRouter:ActivatedRoute,private utilityService:UtilityService) { }

  id : number | any = 0
  updateChapterForm : FormGroup | any
  chapterDetail:Chapters | any= new Chapters()
  isLoading: boolean = true

  ngOnInit(): void {
    this.updateChapterForm = new FormGroup(
      {
        "chapterId" : new FormControl(''),
        "chapterName": new FormControl(Date,[Validators.required]),
        "chapterlink": new FormControl('',[Validators.required]),
        "chapterDate": new FormControl('',[Validators.required]),
        "meetingTime" : new FormControl('',[Validators.required])
      }
    )
    this.getChapterDetail()
  }

  private getChapterDetail(){
    this.id = this.activatedRouter.snapshot.params['id']
    this.chapterService.getSingleChapterDetail(this.id).subscribe(
      data => {
        console.log(data)
        this.chapterDetail.chapterId = data.chapterId
        this.chapterDetail.chapterName = data.chapterName
        this.chapterDetail.chapterlink = data.chapterlink
        this.chapterDetail.chapterDate = <Date>data.chapterDate
        let date: Date = new Date(this.chapterDetail.chapterDate)
        let hour = String(date.getHours()).padStart(2,"0")
        let minute = String(date.getMinutes()).padStart(2,"0")
        let time = hour +":"+ minute


        this.updateChapterForm.patchValue(
          {
            chapterId : this.chapterDetail.chapterId,
            chapterName : this.chapterDetail.chapterName,
            chapterlink : this.chapterDetail.chapterlink,
            chapterDate : <Date>this.chapterDetail.chapterDate,
            meetingTime : time
          }
        )
        console.log("Chapter Detail ",this.chapterDetail)
        this.isLoading = false
        console.log("Form Data : ",this.updateChapterForm.value)
      },
      error =>{
        console.log(error)
        this.isLoading = false
      }
    )
  }

  onUpdateChapter(){
    this.chapterDetail = this.updateChapterForm.value;
    console.log(this.chapterDetail.chapterDate)
    this.chapterDetail.courseId = this.activatedRouter.snapshot.params['id'];
    const splitTime:any[] = this.chapterDetail.meetingTime.split(":");
    let meetingDate = new Date(this.chapterDetail.chapterDate)
    meetingDate.setHours(splitTime[0])
    meetingDate.setMinutes(splitTime[1])
    meetingDate.setSeconds(0)
    this.chapterDetail.chapterDate = meetingDate

    console.log("Chapter detail : ",this.chapterDetail)
    this.chapterService.updateChapter(this.chapterDetail).subscribe(
      data => {
        console.log(data)
        this.chapterDetail.courseId = data.course.courseId
        this.utilityService.openSnackBar("Chapter updated!","close")
        this.router.navigate(['/admin/courses/chapter/detail',this.chapterDetail.courseId])
      },
      error => console.log(error)
    )

  }

  get chaptername(){return this.updateChapterForm.get('chapterName')}
  get chapterlink(){return this.updateChapterForm.get('chapterlink')}
  get chapterdate(){return this.updateChapterForm.get('chapterDate')}
  get meetingtime(){return this.updateChapterForm.get('meetingTime')}
}
