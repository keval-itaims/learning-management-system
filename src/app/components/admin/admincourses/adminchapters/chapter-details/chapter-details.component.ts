import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Chapters } from 'src/app/classes/chapters';
import { ChapterServices } from 'src/app/services/chapters.service';

@Component({
  selector: 'app-chapter-details',
  templateUrl: './chapter-details.component.html',
  styleUrls: ['./chapter-details.component.css']
})
export class ChapterDetailsComponent implements OnInit {

  id:number = 0
  chaptersDetails : Chapters[] = []
  isLoading : boolean = true

  constructor(private activatedRouter:ActivatedRoute,private chapterService:ChapterServices) { }

  displayedColumns: string[] = ['chapterName', 'chapterDate','chapterTime', 'chapterlink'];
  dataSource: MatTableDataSource<Chapters[]> | any;

  ngOnInit(): void {
    // this.getChapters()
  }

  private getChapters(){
    this.id = this.activatedRouter.snapshot.params['id']
    this.chapterService.getChaptersByCourseId(this.id).subscribe(
      data =>{
        console.log(data)
        this.chaptersDetails = data
        this.isLoading = false
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

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
