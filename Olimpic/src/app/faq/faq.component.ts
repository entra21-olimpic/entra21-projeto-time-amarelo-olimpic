import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqs!:Array<any>;
  faq!:any;
  sendQuestion: boolean = false;
  index: number = 6;
  status3 : boolean = true;
  sendSuccess: boolean = false;

  constructor(private faqService: FaqService) { }

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

  validForm(): boolean {
    let valid: boolean = true;
    if (
      !this.faq.name ||
      !this.faq.email ||
      !this.faq.message

    ) {
      this.status3 = false
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
        console.log(response);

        if (response) {
          this.faqs.push(response);
          this.faq = {};
          this.sendSuccess = true;
        }
      });
  }

  update(): void {
    if (!this.validForm()) {
      alert('Preencha os campos obrigatorios');

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
        console.log(response);

        if (response) {
          this.faqs[this.faqs.indexOf(this.faq)] = response;
        }
      });
  }

  delete(user: any): void {
    this.faqService

      .delete(user) //

      .pipe(
        catchError((error) => {
          return of(false);
        })
      )

      .subscribe((response: any) => {
        console.log(response);

        if (response) {
          this.faqs.splice(this.faqs.indexOf(this.faq), 1);
        }
      });
  }

 clean(){
  this.faq = {};
 }

}
