import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  links!: Array<any>;

  constructor() {}

  ngOnInit(): void {
    this.links = JSON.parse(localStorage.getItem('dados') || '');

    console.log(typeof this.links);

    console.log(this.links);

    this.links = new Array();

    this.links.push({
      // Usuario do Banco
      // About vindo do Banco
    });
  }
}
