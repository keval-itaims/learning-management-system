import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Chapters } from "../classes/chapters";

@Injectable({
  providedIn: 'root'
})
export class ChapterServices{

  constructor(private httpClient:HttpClient){}

  baseUrl = environment.url + '/chapters'

  public addChapter(chapter:Chapters):Observable<Chapters>{

    return this.httpClient.post<Chapters>(this.baseUrl,chapter);
  }

  public getChaptersByCourseId(id:number):Observable<Chapters[]>{
    return this.httpClient.get<Chapters[]>(`${environment.url}/chapter/id`)
  }

  public deleteChapter(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }
}
