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
          usersTeam.push({ id: 1 });
          usersTeam.push({ id: 2 });
          usersTeam.push({ id: 3 });
          return of(usersTeam);
        })
      )
      .subscribe((response) => {
        console.log(response);

        this.usersTeam = response;
      });
  }

}
