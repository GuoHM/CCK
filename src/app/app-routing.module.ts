import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SacnNRICComponent } from './sacn-nric/sacn-nric.component';
import { OrderCollectComponent } from './order-collect/order-collect.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { LocationComponent } from './location/location.component';
import { PaymentComponent } from './payment/payment.component';
import { InsertCashComponent } from './insert-cash/insert-cash.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CollectComponent } from './collect/collect.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'scan-NRIC',
    component: SacnNRICComponent
  },
  {
    path: 'order-collect',
    component: OrderCollectComponent
  },
  {
    path: 'order-success',
    component: OrderSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
