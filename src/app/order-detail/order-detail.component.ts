import { Component, OnInit } from '@angular/core';
import {Medications} from '../models/medication';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  listOfMedication: Medications[] = [
    {
      name: "Insulin",
      duration: "1/2/20-1/3/2020",
      cost: "$50.00"
    },
    {
      name: "Antibiotics",
      duration: "1/2/20-1/3/2020",
      cost: "$20.00"
    },
    {
      name: "Vicodin",
      duration: "1/2/20-1/3/2020",
      cost: "$24.00"
    },
    {
      name: "Simvastatin ",
      duration: "1/2/20-1/3/2020",
      cost: "$37.00"
    }
  ]

  total: number = 131.00;
  constructor(    
    private location: Location,
    private router: Router
    ) { }

  ngOnInit() {
  }

  forward() {
    this.router.navigate(['/location']);
  }

  back() {
    this.location.back();
  }

}
