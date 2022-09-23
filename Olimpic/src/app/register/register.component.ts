
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

  openForm(): void {
    this.user = {};
    this.cadastrando = true;
  }

  closeForm(): void {
    this.user = {};
    this.cadastrando = false;
  }

  updateForm(user: any): void {
    this.user = user;
    this.cadastrando = true;
  }

  validForm(): boolean {
    let valid: boolean = true;
    if (!this.user.name || !this.user.last_name || !this.user.age || !this.user.telephone || !this.user.address || !this.user.email || !this.user.password ) {
      valid = false;
    }

    return valid;
  }

  validLogin(): boolean {
    let valid: boolean = true;
    if (!this.user.email || !this.user.password ) {
      valid = false;
    }

    return valid;
  }

  create(): void {
    if(!this.validForm()){
      alert('Preencha os campos obrigatórios');
      return;
    }

    this.userService.create(this.user).pipe(catchError((error) =>{
      return of(error);
    })
    ).subscribe((response:any) =>{
      console.log(response);

      if(response){
        this.users.push(response);

        this.closeForm();
      }

    });

  }

  update(): void {
    if (!this.validForm()) {
      alert('Preencha os campos obrigatorios');

      return;
    }

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
          this.users[this.users.indexOf(this.user)] = response;

          this.closeForm();
        }
      });
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

  login(){
    if(!this.validLogin()){
      alert('Usuário ou senha inválidos');
      return;
    }

    this.router.navigateByUrl("profile")

  }
}

