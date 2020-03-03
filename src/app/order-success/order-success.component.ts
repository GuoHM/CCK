import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  btnDisplay : boolean = false;

  check() {
    return this.btnDisplay;
  }

  disabled(event, overlaypanel){
    overlaypanel.toggle(event);
    this.btnDisplay = true;
  }

  forward() {
  	this.router.navigate(['/home']);
  }


}
