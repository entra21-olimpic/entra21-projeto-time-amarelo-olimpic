import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  links!: Array<any>;

  constructor(public router: Router) { }

  ngOnInit(): void {

    this.links = new Array();

    this.links.push({
      rota: 'about',
      textContent: 'About',
    });

  }

}
