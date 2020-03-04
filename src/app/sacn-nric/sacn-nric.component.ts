import { Component, OnInit } from '@angular/core';

import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sacn-nric',
  templateUrl: './sacn-nric.component.html',
  styleUrls: ['./sacn-nric.component.css']
})
export class SacnNRICComponent implements OnInit {

  NRICForm: FormGroup;

  constructor(
    private location: Location,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.NRICForm = this.formBuilder.group({
      nric: ['', Validators.required]
    });
  }

  get f() { return this.NRICForm.controls; }

  forward() {
    this.router.navigate(['/order-collect']);
  }

  back() {
    this.location.back();
  }

}
