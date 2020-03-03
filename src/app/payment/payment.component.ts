import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  imageSrc = '../assets/img/cash.png' 
  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }

  cash() {
    this.router.navigate(['/insert-cash']);
  }

  card() {
    this.router.navigate(['/insert-card']);
  }

  back() {
    this.location.back();
  }

}
