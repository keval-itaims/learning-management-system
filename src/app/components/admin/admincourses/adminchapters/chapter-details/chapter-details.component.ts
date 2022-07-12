import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private activatedRouter:ActivatedRoute,private chapterService:ChapterServices,private confirmDialogService : ConfirmDialogService,private utilityService:UtilityService) { }

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

  }
  onDeleteChapter(element:any){

    let id = element.chapterId;
    console.log("Chapter Id : ",id)
    this.confirmDialogService.openConfirmDialog({
      title: 'Delete Chapter',
      message: 'Are you sure?',
      confirmText: 'Delete',
      cancleText: 'Cancle'
    }).subscribe(
      result => {
        if (result) {
          this.chapterService.deleteChapter(id).subscribe(
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
