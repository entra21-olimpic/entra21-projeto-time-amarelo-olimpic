import { RegisterService } from './../register.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { catchError, of } from 'rxjs';



@Component({

  selector: 'app-register',

  templateUrl: './register.component.html',

  styleUrls: ['./register.component.css'],

})

export class RegisterComponent implements OnInit {

  users!: Array<any>;

  user!: any;

  cadastrando!: boolean;





  constructor(private registerService: RegisterService) {}



  ngOnInit(): void {

    this.getAll();

  }



  getAll(): void {

    this.registerService

      .getAll()

      .pipe(

        catchError((error) => {

          let users: Array<any> = new Array();

          users.push({ id: 1, nome: 'User1', idade: 10 });

          users.push({ id: 2, nome: 'User2', idade: 20 });

          users.push({ id: 3, nome: 'User3', idade: 30 });

          return of(users);

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



  create(): void {

    if (!this.validForm()) {

      alert('Preencha os campos obrigatorios');

      return;

    }



    this.registerService

      .create(this.user)

      .pipe(

        catchError((error) => {

          return of(error);

        })

      )

      .subscribe((response: any) => {

        console.log(response);

        if (response) {

          this.users.push(response);



          this.closeForm();

        }

      });

  }

  validForm(): boolean {

    let valid: boolean = true;

    if (!this.user.name) {

      valid = false;

    }

    if (!this.user.age) {

      valid = false;

    }

    return valid;

  }



  update(): void {

    if (!this.validForm()) {

      alert('Preencha os campos obrigatorios');

      return;

    }

    this.registerService

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

    this.registerService

      .delete(user)

      .pipe(

        catchError((error) => {

          return of(false);

        })

      )

      .subscribe((response: any) => {

        console.log(response);

        if (response) {

          this.users.splice(this.users.indexOf(user), 1);

        }

      });

  }

}
