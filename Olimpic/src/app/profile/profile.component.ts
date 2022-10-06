import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  links!: Array<any>;
  timeLeft: number = 0;
  interval: any;

  constructor() {}

  ngOnInit(): void {
    this.links = new Array();

    this.links.push(

      JSON.parse(localStorage.getItem('dados') || '')

      );

    console.log(this.links);
  }

  startTimer() {
      this.interval = setInterval(() => {
        if(this.timeLeft > 0) {
          this.timeLeft++;
          console.log(this.timeLeft)
        } else {
          this.timeLeft = 60;
          console.log(this.timeLeft)
        }
      },1000)
    }

    pauseTimer() {
      clearInterval(this.interval);
    }

}
