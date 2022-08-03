import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/classes/blog';
import { BlogService } from 'src/app/services/blog.service';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css']
})
export class ViewblogComponent implements OnInit {

  constructor(private blogService:BlogService,private router:Router,private activatedRoute:ActivatedRoute,private utilityService:UtilityService,private confirmDialogService:ConfirmDialogService) { }
  id:number = 0
  blogDetail:Blog = new Blog()
  isLoading:boolean = true
  @ViewChild('blogContent') blogContent!:ElementRef
  ngOnInit(): void {
    this.getBlogDetail()
  }

  private getBlogDetail(){
    this.id = this.activatedRoute.snapshot.params['id']
    this.blogService.getSingleBlogDetail(this.id).subscribe(
      data =>{
        this.blogDetail = data
        this.isLoading = false
        this.loadHTML(this.blogDetail.blogBody)
      },
      error =>{
        this.isLoading = false
        console.log(error)
      }
    )
  }

  private loadHTML(blogBody:string){
    this.blogContent.nativeElement.innerHTML = blogBody
   
  }


}
