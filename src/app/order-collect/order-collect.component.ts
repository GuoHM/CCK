import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { OverlayPanelModule } from 'primeng/overlaypanel';


@Component({
  selector: 'app-order-collect',
  templateUrl: './order-collect.component.html',
  styleUrls: ['./order-collect.component.css']
})
export class OrderCollectComponent implements OnInit {


  constructor(private router: Router) { }

  btnDisplay : boolean = false;

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
