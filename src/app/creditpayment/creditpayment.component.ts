import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-creditpayment',
  templateUrl: './creditpayment.component.html',
  styleUrls: ['./creditpayment.component.css']
})
export class CreditpaymentComponent implements OnInit {
  selectedValue: string = 'val1';
  constructor(
    private location:Location,
    private router:Router
  ) { }

  ngOnInit() {
  }

  pay(){
    this.router.navigate(['/order-success']);
  }
 
  back(){
    this.location.back();
  }
}
