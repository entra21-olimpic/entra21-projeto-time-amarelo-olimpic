import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  links!: Array<any>

  constructor() { }

  ngOnInit(): void {

    this.links = new Array();

    this.links.push({
      // Usuario do Banco
      // About vindo do Banco
    })

  }

}
