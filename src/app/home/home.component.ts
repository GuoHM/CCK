import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickToBegin: string = "Click to Begin";

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  forward() {
    this.router.navigate(['/scan-NRIC']);
  }

  english(){
    this.clickToBegin = "Click to Begin";
    this.forward();
  }

  mandarin(){
    this.clickToBegin = "点击开始";
    this.forward();
  }

  malay(){
    this.clickToBegin = "klik untuk memulakan";
    this.forward();
  }

  tamil(){
    this.clickToBegin = "தொடங்க கிளிக் செய்க";
    this.forward();
  }
}
