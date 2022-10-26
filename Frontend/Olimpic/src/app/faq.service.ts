import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  faqUrl:string = "http://localhost:8080/faqs";

  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get<any>(this.faqUrl)
  }

  getById(question:any):Observable<any>{
    return this.http.get<any>(this.faqUrl,question)
  }

  create(question:any):Observable<any>{
    return this.http.post<any>(this.faqUrl, question)
  }

  update(question:any):Observable<any>{
    return this.http.put<any>(this.faqUrl + "/" + question.id, question)
  }

  delete(question:any):Observable<any>{
    return this.http.delete<any>(this.faqUrl + "/" +  question.id)
  }

}
