import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  profileUrl:string = "http://localhost:8080/about";

  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get<any>(this.profileUrl)
  }
}
