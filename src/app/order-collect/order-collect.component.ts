import { Component, OnInit } from '@angular/core';
 
import { Location } from'@angular/common';
import { Router } from '@angular/router';
import { SacnNRICComponent } from '../sacn-nric/sacn-nric.component';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-order-collect',
  templateUrl: './order-collect.component.html',
  styleUrls: ['./order-collect.component.css']
})
export class OrderCollectComponent implements OnInit {
  displayModal: boolean = true;
  constructor(
    private location: Location,
    private router: Router,
  ) { }
 
  ngOnInit(
  ) {}
 
  collect() {
    this.router.navigate(['/collect']);
  }
  order() {
    this.router.navigate(['/order-detail']);
  }
 
  back() {
    this.location.back();
  }
  showModalDialog() {
    this.displayModal = true;
}
 
}