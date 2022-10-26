import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  faqs!: Array<any>;
  faq!: any;
  sendQuestion: boolean = false;
  index: number = 6;
  status3: boolean = true;
  sendSuccess: boolean = false;

  constructor(private faqService: FaqService) {}

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
          faqs.push({ id: 1, message: "Why use this site?" , answer: "Olimpic is the best site for those who like to exercise or want to start some physical activity, with user interaction that will motivate you to continue in a healthier routine." });
          faqs.push({ id: 2, message: "What are the advantages that the site can give me?" , answer: "You will be able to share experiences, monitor your activities and communicate with other people who also play a sport." });
          faqs.push({ id: 3, message: "Why can't login?" , answer: "If you are having difficulty accessing our platform, I recommend sending a message to the support provided at the bottom of this page." });
          return of(faqs);
        })
      )
      .subscribe((response) => {
        this.faqs = response;
      });
  }

  validForm(): boolean {
    let valid: boolean = true;
    if (!this.faq.name || !this.faq.email || !this.faq.message) {
      this.status3 = false;
      valid = false;
    }

    return valid;
  }

  create(): void {
    if (!this.validForm()) {
      return;
    }

    this.faqService
      .create(this.faq)
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response: any) => {
        if (response) {
          this.faqs.push(response);
          this.faq = {};
          this.sendSuccess = true;
        }
      });
  }

  update(): void {
    if (!this.validForm()) {
      return;
    }

    this.faqService

      .update(this.faq)

      .pipe(
        catchError((error) => {
          return of(error);
        })
      )

      .subscribe((response: any) => {
        if (response) {
          this.faqs[this.faqs.indexOf(this.faq)] = response;
        }
      });
  }

  clean() {
    this.faq = {};
  }
}
