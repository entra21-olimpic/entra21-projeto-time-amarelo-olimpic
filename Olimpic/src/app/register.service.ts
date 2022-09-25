import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';



@Injectable({

  providedIn: 'root'

})

export class RegisterService {

  profileUrl:string = "http://localhost:8080/profile";

  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get<any>(this.profileUrl)
  }

  getById(profile:any):Observable<any>{
    return this.http.get<any>(this.profileUrl,profile)
  }

  create(profile:any):Observable<any>{
    return this.http.post<any>(this.profileUrl, profile)
  }

  update(profile:any):Observable<any>{
    return this.http.put<any>(this.profileUrl + "/" + profile.id, profile)
  }

  delete(profile:any):Observable<any>{
    return this.http.delete<any>(this.profileUrl + "/" +  profile.id)
  }

}
