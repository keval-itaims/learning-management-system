import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

import { Blog } from 'src/app/classes/blog';
import { BlogService } from 'src/app/services/blog.service';
import { UtilityService } from 'src/app/services/utility.service';
// import * as ClassicEditor from '@ckeditor/ckeditor5-angular';
// import * as InlineEditor from '@ckeditor/ckeditor5-build-inline';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  // public Editor:any = InlineEditor;

  initConfiguration:any
  addBlogForm!:FormGroup | any
  blogImage !: File
  blogDetail!:Blog
  isLoading:boolean = false

  constructor(private blogService:BlogService,private router:Router,private utilityService:UtilityService) { }

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
    this.addBlogForm = new FormGroup({
      "blogTitle" : new FormControl('',[Validators.required]),
      "blogBody": new FormControl('',[Validators.required]),
      "image" : new FormControl('',[Validators.required]),

    })
  }

  onSelectImage(element:any){
    this.blogImage = element.target.files[0];
  }

  onAddBlog(){
    this.isLoading = true
    this.blogDetail = this.addBlogForm.value
    this.blogDetail.blogDate = new Date()
    this.blogService.addBlog(this.blogDetail).subscribe(
      data =>{
        this.isLoading = false
        let id = data.blogId
        const formData = new FormData()
        formData.append('blogImage',this.blogImage,this.blogImage.name)
        this.blogService.uploadBlogImage(id,formData).subscribe(
          event => {
            if(event.type === HttpEventType.UploadProgress){
              if(event.total){
                let progress = Math.round(event.loaded / event.total) * 100;
                if(progress===100){
                  setTimeout(()=>{
                    this.isLoading = false;
                    this.utilityService.openSnackBar("Blog added!","close")
                    this.router.navigate(['/admin/blog/detail'])
                  },1000)
                }

              }
            }
          },
          error =>{
            console.log(error)
            this.isLoading = false
          }
        )
      },
      error =>{
        console.log(error)
        this.isLoading = false
      }
    )
  }

  get blogtitle(){return this.addBlogForm.get('blogTitle')}
  get blogcontent(){return this.addBlogForm.get('blogBody')}
  get blogimage(){return this.addBlogForm.get('image')}
}


