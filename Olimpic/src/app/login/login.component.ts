import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, isEmpty, of } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    this.loginService

      .login(this.getDados())

      .pipe(
        catchError((error) => {
          return of(null);
        })
      )

      .subscribe((response: any) => {
        console.log(response);

        if (response != null) {
          this.router.navigateByUrl('profile');
        } else {
          alert('Usuário ou senha inválidos!');
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
