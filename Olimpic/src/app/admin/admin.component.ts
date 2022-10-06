import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  faqs!:Array<any>;
  faq!:any;
  responding: boolean = false;

  constructor(private faqService:FaqService) { }

  ngOnInit(): void {
    this.getAll();
    this.faq = {};
  }

  getAll(): void {
    this.faqService
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

        this.faqs = response;
      });
  }

  answerForm(question: any): void {
    this.faq = question;
    this.responding = true;
  }

  update(): void {



    this.faqService

      .update(this.faq)

      .pipe(
        catchError((error) => {
          return of(error);
        })
      )

      .subscribe((response: any) => {
        console.log(response);

        if (response) {
          this.faqs[this.faqs.indexOf(this.faq)] = response;
          this.responding = false;
        }
      });
  }

}
