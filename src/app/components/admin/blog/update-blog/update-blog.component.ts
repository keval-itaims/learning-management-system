import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/classes/blog';
import { BlogService } from 'src/app/services/blog.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  id:number = 0
  blogDetail:Blog = new Blog()
  isLoading:boolean = true
  updateBlogForm:FormGroup | any
  initConfiguration : any
  blogImage:File | any

  constructor(private blogService:BlogService,private router:Router,private utilityService:UtilityService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.initConfiguration = {
      height: 500,
      selector: 'textarea#local-upload',
      plugins: [
        'advlist',
        'autolink',
        'lists',
        'link',
        'image',
        'charmap',
        'preview',
        'anchor',
        'searchreplace',
        'visualblocks',
        'code',
        'fullscreen',
        'insertdatetime',
        'media',
        'table',
        'editimage',
        'wordcount'
      ],
      toolbar:
        'undo redo | styles | bold italic | alignleft aligncenter alignright     alignjustify | bullist numlist outdent indent | link image',
    }
    this.updateBlogForm = new FormGroup({
      "blogTitle" : new FormControl('',[Validators.required]),
      "blogBody": new FormControl('',[Validators.required]),
      "blogDate" : new FormControl('')
    })
    this.getBlogDetail()
  }

  onSelectImage(element:any){
    this.blogImage = element.target.files[0];
  }


  private getBlogDetail(){
    this.id = this.activatedRoute.snapshot.params['id']
    this.blogService.getSingleBlogDetail(this.id).subscribe(
      data =>{
        this.blogDetail = data
        this.isLoading = false
        this.updateBlogForm.patchValue({
          blogTitle : this.blogDetail.blogTitle,
          blogBody : this.blogDetail.blogBody,
          blogDate : this.blogDetail.blogDate
        })
      },
      error =>{
        this.isLoading = false
        console.log(error)
      }
    )
  }

  onUpdateBlog(){
    this.isLoading  = true
    this.blogDetail = this.updateBlogForm.value
    this.blogDetail.blogId = this.id
    this.blogService.updateBlog(this.blogDetail).subscribe(
      data =>{
        if(this.blogImage){
          const formData = new FormData();
          formData.append('blogImage',this.blogImage,this.blogImage.name);

          this.blogService.uploadBlogImage(this.blogDetail.blogId,formData).subscribe(
              event =>{
                if(event.type == HttpEventType.UploadProgress){
                  let progress = 0
                  if(event.total){
                    progress = Math.round((event.loaded / event.total ) * 100);
                  }
                  if(progress === 100){
                      setTimeout(()=>{
                        this.isLoading = false
                        this.utilityService.openSnackBar("Blog updated!","close")
                        this.router.navigate(['/admin/blog/detail'])
                      },1500)
                  }


                 }
              },
              error =>{
                this.isLoading = false;
                console.log(error)
              }
          )
        }
        this.isLoading = false
        this.utilityService.openSnackBar("Blog updated!","close")
        this.router.navigate(['/admin/blog/detail'])
      },
      error =>{
        console.log(error)
        this.isLoading = false
      }
    )
  }

  get blogtitle(){return this.updateBlogForm.get('blogTitle')}
  get blogcontent(){return this.updateBlogForm.get('blogBody')}

}
