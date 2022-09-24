import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, isEmpty, of } from 'rxjs';
import { RegisterService } from '../register.service';


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

  constructor(private userService: RegisterService, private router: Router, private  http:HttpClient) {}

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

        if (!response.status) { // Funcionando mas precisa de revisão

          this.router.navigateByUrl('profile');

        }else{
          alert('Usuário ou senha inválidos!')

        }

      });
  }

  getDados(): any {
    return {
      email: this.email,
      password: this.password,
    };
  }
}
