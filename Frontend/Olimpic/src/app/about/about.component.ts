import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  usersTeam!: Array<any>;
  userTeam!: any;

  constructor(private aboutService: AboutService, private router:Router) { }

  ngOnInit(): void {
    this.getAll();

  }

  getAll(): void {
    this.aboutService
      .getAll()
      .pipe(
        catchError((error) => {
          let usersTeam: Array<any> = new Array();
          usersTeam.push({ id: 1, full_name:"Alexsandro Correa", funcao:"Função", funcao_about:"Implantar descrição da função", img_team:"https://avatars.githubusercontent.com/u/104040311?v=4", social_github: "https://github.com/Alexsandro-Correa", social_instagram:"", social_linkedin:""});
          usersTeam.push({ id: 2, full_name:"Ciro Ugalde", funcao:"Função", funcao_about:"Implantar descrição da função", img_team:"https://avatars.githubusercontent.com/u/102829436?v=4", social_github: "https://github.com/Alexsandro-Correa", social_instagram:"", social_linkedin:""});
          usersTeam.push({ id: 3, full_name:"Stephanie Vieira", funcao:"Função", funcao_about:"Implantar descrição da função", img_team:"https://avatars.githubusercontent.com/u/104040319?v=4", social_github: "https://github.com/Alexsandro-Correa", social_instagram:"", social_linkedin:""});
          usersTeam.push({ id: 4, full_name:"Lucas Corrêa Agostinho", funcao:"Função", funcao_about:"Implantar descrição da função", img_team:"https://avatars.githubusercontent.com/u/77413786?v=4", social_github: "https://github.com/Alexsandro-Correa", social_instagram:"", social_linkedin:""});
          return of(usersTeam);
        })
      )
      .subscribe((response) => {
        console.log(response);

        this.usersTeam = response;
      });
  }

}
