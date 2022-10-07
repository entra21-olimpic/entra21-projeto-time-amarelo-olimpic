import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',

  templateUrl: './register.component.html',

  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  users!: Array<any>;
  user!: any;
  signingup:boolean = false
  status2 : boolean = true

  constructor(private userService: RegisterService, private router:Router) {}

  ngOnInit(): void {
    this.getAll();
    this.user = {};
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

  validForm(): boolean {
    let valid: boolean = true;
    if (
      !this.user.name ||
      !this.user.last_name ||
      !this.user.age ||
      !this.user.telephone ||
      !this.user.address ||
      !this.user.email ||
      !this.user.password
    ) {
      this.status2 = false
      valid = false;
    }

    return valid;
  }

  create(): void {
    if (!this.validForm()) {
      return;
    }

    this.userService
      .create(this.user)
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        this.signingup = true;

        if (response) {
          this.users.push(response);
          this.updateForm(response);

        }
      });
  }

  update(): void {

    this.updateForm(this.user);
    console.log(this.user);


    this.userService

      .update(this.user)

      .pipe(
        catchError((error) => {
          return of(error);
        })
      )

      .subscribe((response: any) => {
        console.log(response);

        if (response) {
          //this.users[this.users.indexOf(this.user)] = response;
          this.users.push(response);
          this.router.navigateByUrl('login');
        }
      });
  }

  updateForm(response: any): void {
    this.user = response;
  }

  delete(user: any): void {
    this.userService

      .delete(user) //

      .pipe(
        catchError((error) => {
          return of(false);
        })
      )

      .subscribe((response: any) => {
        console.log(response);

        if (response) {
          this.users.splice(this.users.indexOf(this.user), 1);
        }
      });
  }


}
