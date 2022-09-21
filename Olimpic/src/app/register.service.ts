import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';



@Injectable({

  providedIn: 'root'

})

export class RegisterService {



  profileURL:string="http://localhost:8080/profile"

  constructor(private http: HttpClient) { }



  getAll():Observable<any>{
    return this.http.get<any>(this.profileURL)
  }

  getById(personagem:any):Observable<any>{
    return this.http.get<any>(this.profileURL,personagem)
  }

  create(personagem:any):Observable<any>{
    return this.http.post<any>(this.profileURL, personagem)
  }

  update(personagem:any):Observable<any>{
    return this.http.put<any>(this.profileURL + "/" + personagem.id, personagem)
  }

  delete(personagem:any):Observable<any>{
    return this.http.delete<any>(this.profileURL + "/" +  personagem.id)
  }

}
