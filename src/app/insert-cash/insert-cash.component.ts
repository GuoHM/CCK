import { Component, OnInit } from '@angular/core';
 
import { Location } from '@angular/common';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-insert-cash',
  templateUrl: './insert-cash.component.html',
  styleUrls: ['./insert-cash.component.css']
})
export class InsertCashComponent implements OnInit {
 
  constructor(
    private location:Location,
    private router:Router
  ) { }
 
  ngOnInit() {
  }
 
  confirm(){
    this.router.navigate(['/order-success']);
  }
 
  cancel(){
    this.location.back();
  }
}