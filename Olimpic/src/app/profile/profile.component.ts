import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { PraticeService } from '../pratice.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  links!: Array<any>;

  id!:number;

  pratices!: Array<any>;
  pratice!: any;

  users!: Array<any>
  user!:any;

  seconds: number = 0;
  minutes: number = 0;
  interval: any;
  duration!: String;
  date!: any;

  running: boolean = false;

  constructor(private praticeService: PraticeService, private userService:RegisterService) {}

  ngOnInit(): void {
    this.getAll();
    this.user = {};
    this.links = new Array();
    this.pratice = {};
    this.pratices = new Array();
    this.date = new Date();
    this.date.now;
    this.date.toDateString();

    console.log(this.date);


    this.links.push(JSON.parse(localStorage.getItem('dados') || ''));

    console.log(this.links);
  }

  getAll(): void {
    this.userService
      .getAll()
      .pipe(
        catchError((error) => {
          let users: Array<any> = new Array();
          users.push({ id: 1 });
          users.push({ id: 2 });
          users.push({ id: 3 });
          return of(users);
        })
      )
      .subscribe((response) => {
        console.log(response);

        this.users = response;
      });
  }

  startTimer() {
    this.running = true;
    this.seconds = 0;
    this.minutes = 0;
    this.interval = setInterval(() => {
      if (this.seconds >= 0) {
        this.seconds++;
        console.log(this.seconds.toPrecision());
        if (this.seconds >= 59) {
          this.minutes++;
          this.seconds = 0;
        }
      } else {
        this.seconds < 60;
        console.log(this.seconds);
      }
    }, 1000);
  }

  pauseTimer() {
    this.running = false;
    clearInterval(this.interval);
    this.duration = this.minutes + ':' + this.seconds;

    console.log(this.duration);

    this.praticeService
      .resultPratice(this.getDados())
      .pipe(
        catchError((error) => {
          return of(null);
        })
      )
      .subscribe((response: any) => {

        if (response) {
          this.pratices.push(response);
        }
        console.log(response);

        console.log(this.pratices);
      });
  }

  getDados(): any {
    return {
      duration: this.duration,
      date_pratice: this.date,
    };
  }
}
