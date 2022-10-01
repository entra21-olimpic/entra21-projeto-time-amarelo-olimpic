import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SegurancaService } from '../seguranca.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links!: Array<any>

  constructor(private router: Router,
    private seguranca: SegurancaService) { }

  ngOnInit(): void {
    this.seguranca.entrou = false;

    this.links = new Array();

    this.links.push({
      rota: "home",
      textContent: "Home",
    });
    this.links.push({
      rota: "faq",
      textContent: "FAQs",
    });
    this.links.push({
      rota: "about",
      textContent: "About",
    });
  }

}
