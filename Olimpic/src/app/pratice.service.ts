import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PraticeService {

  praticeUrl:string = "http://localhost:8080/pratice"
  constructor(private http:HttpClient) { }

  resultPratice(data:any): Observable<any>{

    return this.http.post<any>(this.praticeUrl+"/data",data)

  }
}
