import { HttpClient, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Blog } from "../classes/blog";

@Injectable({
  providedIn: 'root'
})
export class BlogService{
  baseUrl = environment.url + "/blog"

  constructor(private httpClient:HttpClient){}

  public getAllBlogDetails():Observable<Blog[]>{
    return this.httpClient.get<Blog[]>(this.baseUrl)
  }

  public getSingleBlogDetail(id:number):Observable<Blog>{
    return this.httpClient.get<Blog>(`${this.baseUrl}/${id}`)
  }

  public addBlog(blog:Blog):Observable<Blog>{
    return this.httpClient.post<Blog>(this.baseUrl,blog);
  }

  public uploadBlogImage(id:number,formData:FormData):Observable<HttpEvent<string[]>>{

    return this.httpClient.post<string[]>(`${this.baseUrl}/save-blog/${id}`,formData,{
      reportProgress:true,
      observe:'events'
    })
  }

  public updateBlog(id:number,blog:Blog):Observable<Blog>{
    return this.httpClient.put<Blog>(`${this.baseUrl}/${id}`,blog)
  }

  public deleteBlog(id:number):Observable<string>{
    return this.httpClient.delete<string>(`${this.baseUrl}/${id}`)
  }
}
