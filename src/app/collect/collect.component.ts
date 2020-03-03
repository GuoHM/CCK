import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.css']
})
export class CollectComponent implements OnInit {

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
