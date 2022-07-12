import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapters } from 'src/app/classes/chapters';
import { ChapterServices } from 'src/app/services/chapters.service';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-chapter-details',
  templateUrl: './chapter-details.component.html',
  styleUrls: ['./chapter-details.component.css']
})
export class ChapterDetailsComponent implements OnInit {

  id:number = 0
  chaptersDetails : Chapters[] = []
  isLoading : boolean = true
  todayDate: Date = new Date()


  constructor(private activatedRouter:ActivatedRoute,private chapterService:ChapterServices,private confirmDialogService : ConfirmDialogService,private utilityService:UtilityService,private router:Router) { }

  displayedColumns: string[] = ['chapterName', 'chapterDate','chapterTime', 'chapterlink','action'];
  dataSource: MatTableDataSource<Chapters[]> | any;

  ngOnInit(): void {
    this.getChapters()
  }

  private getChapters(){
    this.id = this.activatedRouter.snapshot.params['id']
    console.log("id : ",this.id)

    this.chapterService.getChaptersByCourseId(this.id).subscribe(
      data =>{
        console.log(data)
        this.chaptersDetails = data
        this.isLoading = false
        this.dataSource = new MatTableDataSource(this.chaptersDetails)

      },
      error =>{
        console.log(error)
        this.isLoading = false
      }
    )
  }



  onUpdateChapter(element:any){
    this.id = element.chapterId;
    this.router.navigate(['/admin/courses/chapter/update/',this.id])
  }
  onDeleteChapter(element:any){

    this.id = element.chapterId;
    console.log("Chapter Id : ",this.id)
    this.confirmDialogService.openConfirmDialog({
      title: 'Delete Chapter',
      message: 'Are you sure?',
      confirmText: 'Delete',
      cancleText: 'Cancle'
    }).subscribe(
      result => {
        if (result) {
          this.chapterService.deleteChapter(this.id).subscribe(
            data => {
              console.log(data)
              this.utilityService.openSnackBar("Chapter deleted!", "close")
              this.getChapters()
            },
            error => console.log(error)
          )
        }

      }
    )


  }

  compareDate(element:any){
    let d = new Date(element.chapterDate)
    if(this.todayDate.getTime() < d.getTime()){
      return false
    }
    else{
      return true
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
