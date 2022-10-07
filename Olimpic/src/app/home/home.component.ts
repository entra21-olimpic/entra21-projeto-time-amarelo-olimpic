import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users!: Array<any>
  user!: any

  constructor(private userService: RegisterService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.userService
      .getAll()
      .pipe(
        catchError((error) => {
          let users: Array<any> = new Array();
          users.push({ id: 1 });
          users.push({ id: 2 });
          users.push({ id: 3 });
          return of(users);
        })
      )
      .subscribe((response) => {
        console.log(response);

        this.users = response;
      });
  }

}
