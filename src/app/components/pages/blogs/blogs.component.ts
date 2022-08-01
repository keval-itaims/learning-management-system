import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/classes/blog';
import { BlogService } from 'src/app/services/blog.service';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogDetails:Blog[] = []
  isLoading:boolean = true
  constructor(private blogService:BlogService,private router:Router) { }

  ngOnInit(): void {
    this.getBlogDetails()
  }

  private getBlogDetails(){
    this.blogService.getAllBlogDetails().subscribe(
      data =>{
        this.blogDetails = data
        this.isLoading = false
      },
      error =>{
        console.log(error)
        this.isLoading = false
      }
    )
  }


}
