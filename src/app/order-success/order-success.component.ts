import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  check() {
    return this.btnDisplay;
  }

  disabled(event, overlaypanel){
    overlaypanel.toggle(event);
    this.btnDisplay = true;
  }

  home() {
  	this.router.navigate(['/home']);
  }

}
