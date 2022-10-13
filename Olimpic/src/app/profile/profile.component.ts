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

  returnPratices!: Array<any>;
  returnPratice!: any;

  running: boolean = false;
  praticeEnd : boolean = false;

  constructor(private praticeService: PraticeService, private userService:RegisterService) {}

  ngOnInit(): void {
    this.getAll();
    this.getAllpratices();
    this.getPratices();
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

  getAllpratices():void{
    this.praticeService
      .getAllPratice()
      .pipe(
        catchError((error) => {
          let pratices: Array<any> = new Array();
          pratices.push({ id: 1 });
          pratices.push({ id: 2 });
          pratices.push({ id: 3 });
          return of(pratices);
        })
      )
      .subscribe((response) => {
        console.log(response);

        this.pratices = response;
      });
  }

  getPratices(){
    this.praticeService.listName()
    .pipe(
      catchError((error) => {
        return of(null);
      })
    )
    .subscribe((response) => {
      console.log(response);

      this.returnPratices = response;
    });
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
    this.praticeEnd = false;
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
    this.praticeEnd = true;
    this.duration = this.minutes + ':' + this.seconds;
    this.running = false;
    clearInterval(this.interval);
    console.log(this.duration);
  }

  returnDados(){
    this.praticeEnd = false;
    this.duration = this.minutes + ':' + this.seconds;
    this.praticeService
    .savePratice(this.getDados())
    .pipe(
      catchError((error) => {
        return of(null);
      })
    )
    .subscribe((response: any) => {

      if (response) {
        this.getPratices();
        this.pratices.push(response);
      }
      console.log("Response",response);

      console.log("Pratices",this.pratices);
    });
  }

  discardDados(){
    this.praticeEnd = false;
  }

  getDados(): any {
    return {
      duration: this.duration,
      date_pratice: this.date,
      profile_id: this.links[0].id
    };
  }
}
