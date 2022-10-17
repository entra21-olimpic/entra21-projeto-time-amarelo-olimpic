import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { RegisterService } from '../register.service';
import { SegurancaService } from '../seguranca.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  users!: Array<any>;
  user!: any;
  id!: any;

  base64: string = 'Base64...';
  fileSelected?: any;
  imageUrl?: string;
  files: any;

  userUpdate:boolean = false;

  constructor(private userService: RegisterService, private router: Router, private seguranca: SegurancaService) {}

  ngOnInit(): void {

    this.user = {};

    this.users = new Array();

    this.users.push(JSON.parse(localStorage.getItem('dados') || ''));

    this.initForm();

  }

  getAll(): void {
    this.userService
      .getAll()
      .pipe(
        catchError((error) => {
          let faqs: Array<any> = new Array();
          faqs.push({ id: 1 });
          faqs.push({ id: 2 });
          faqs.push({ id: 3 });
          return of(faqs);
        })
      )
      .subscribe((response) => {
        console.log(response);

        this.users = response;
      });
  }

  userForm(attUser: any): void {
    this.user = attUser;
    this.userUpdate = true;
  }

  update(): void {



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
          this.seguranca.entrou = true;
          this.router.navigateByUrl('profile');
        }
      });
  }

  onFileSelected(event: any): void {
    this.fileSelected = event.target.files[0];
    console.log(this.fileSelected);

    let reader = new FileReader();
    reader.readAsDataURL(this.fileSelected);
    reader.onloadend = () => {
      this.base64 = reader.result as string;
      console.log(this.base64);
      this.user.image = this.base64;
      this.userService
        .update(this.user)
        .pipe(
          catchError((error) => {
            return of(error);
          })
        )
        .subscribe((response) => {
          console.log(response);
        });
    };
  }

  cancel() {
    this.router.navigateByUrl('profile');
    this.seguranca.entrou = true;
  }

  initForm():void{
    this.users.forEach(user => {
      if(this.users[0].id){
        return this.userForm(user);
      }
    });

  }


}
