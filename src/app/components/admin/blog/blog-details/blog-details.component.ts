import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/classes/blog';
import { BlogService } from 'src/app/services/blog.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

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

  onViewBlog(id:number){
    this.router.navigate(['admin/blog/view/',id])
  }

}
