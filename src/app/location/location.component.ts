import { Component, OnInit } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  brands: string[] = ['Anchorvale Community Club', 'Chong Pang Community Club', 'Mountbatten Community Club', 'Aljunied Community Centre', 'Bukit Batok Community Club', 'Chua Chu Kang Community Club', 'Eunos Community Club', 'Henderson Community Club'];
  date13: Date;
  filteredBrands: any[];

  brand: string = 'Anchorvale Community Club';
  // brand: string = "Anchorvale Community Club";
  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  forward() {
    this.router.navigate(['/confirmation', {location: this.brand, date: this.date13.toDateString()}]);
  }

  back() {
    this.location.back();
  }

  filterBrands(event) {
    this.filteredBrands = [];
    for(let i = 0; i < this.brands.length; i++) {
        let brand = this.brands[i];
        if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.filteredBrands.push(brand);
        }
    }
}
}
