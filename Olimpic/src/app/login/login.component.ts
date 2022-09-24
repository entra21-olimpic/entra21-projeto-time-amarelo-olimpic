import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users!: Array<any>;
  user!: any;
  cadastrando!: boolean;

  constructor(private userService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
    this.user = {};
  }

  getAll(): void {
    this.userService
      .getAll()
      .pipe(
        catchError((error) => {
          let personagens: Array<any> = new Array();
          personagens.push({ id: 1 });
          personagens.push({ id: 2 });
          personagens.push({ id: 3 });
          return of(personagens);
        })
      )
      .subscribe((response) => {
        console.log(response);

        this.users = response;
      });
  }

  validLogin(): boolean {
    let valid: boolean = true;
    if (!this.user.email || !this.user.password ) {
      valid = false;
    }

    return valid;
  }

  login(){
    if(!this.validLogin()){
      alert('Usuário ou senha inválidos');
      return;
    }

    this.router.navigateByUrl("profile")

  }

}
