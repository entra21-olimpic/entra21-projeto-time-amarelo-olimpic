import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, isEmpty, of } from 'rxjs';
import { RegisterService } from '../register.service';
import { SegurancaService } from '../seguranca.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  users!: Array<any>;
  user!: any;
  cadastrando!: boolean;

  constructor(private userService: RegisterService, private router: Router) {}

  ngOnInit(): void {
    this.user = {};
  }

  login(): void {
    this.userService

      .login(this.getDados())

      .pipe(
        catchError((error) => {
          return of(error);
        })
      )

      .subscribe((response: any) => {
        console.log(response);

        if (response()) { // está funcionanod no console mas ainda falta no site
          this.router.navigateByUrl('profile');
        }

        alert('yeap');
        //this.router.navigateByUrl("profile")
      });
  }

  getDados(): any {
    return {
      email: this.email,
      password: this.password,
    };
  }
}
