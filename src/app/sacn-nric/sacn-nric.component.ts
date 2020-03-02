import { Component, OnInit } from '@angular/core';

import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sacn-nric',
  templateUrl: './sacn-nric.component.html',
  styleUrls: ['./sacn-nric.component.css']
})
export class SacnNRICComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }

  forward() {
    this.router.navigate(['/order-collect']);
  }

  back() {
    this.location.back();
  }

}
