import { Component, OnInit } from '@angular/core';
import { Medications } from '../models/medication';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  listOfMedication: Medications[] = [
    {
      name: "Insulin",
      duration: "1/2/20-1/3/2020",
      cost: "$50"
    },
    {
      name: "Antibiotics",
      duration: "1/2/20-1/3/2020",
      cost: "$20"
    },
    {
      name: "Vicodin",
      duration: "1/2/20-1/3/2020",
      cost: "$24"
    },
    {
      name: "Simvastatin ",
      duration: "1/2/20-1/3/2020",
      cost: "$37"
    }
  ]

  communityCentre: string;
  dateOfCollection: string;

  total: number = 131;
  constructor(    
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.communityCentre = this.route.snapshot.paramMap.get('location');
    this.dateOfCollection = this.route.snapshot.paramMap.get('date');

  }
  

  forward() {
    this.router.navigate(['/payment']);
  }

  back() {
    this.location.back();
  }

}
