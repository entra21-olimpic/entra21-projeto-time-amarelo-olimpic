import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, isEmpty, of } from 'rxjs';
import { LoginService } from '../login.service';
import { SegurancaService } from '../seguranca.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  status: Boolean = true;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private seguranca: SegurancaService
  ) {}

  ngOnInit(): void {}

  login(): void {
    if (this.email === 'admin@email.com' && this.password === 'admin') {
      this.router.navigateByUrl('admin');
    } else {
      this.loginService

        .login(this.getDados())

        .pipe(
          catchError((error) => {
            return of(null);
          })
        )

        .subscribe((response: any) => {
          if (response == null) {
            this.status = false;
          }

          if (response != null) {
            let dados = localStorage.setItem('dados', JSON.stringify(response));
            this.seguranca.entrou = true;

            this.router.navigateByUrl('profile');
          } else {
          }
        });
    }
  }

  getDados(): any {
    return {
      email: this.email,
      password: this.password,
    };
  }
}
