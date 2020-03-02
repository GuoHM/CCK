import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SacnNRICComponent } from './sacn-nric/sacn-nric.component';
import { OrderCollectComponent } from './order-collect/order-collect.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { LocationComponent } from './location/location.component';
import { PaymentComponent } from './payment/payment.component';
import { InsertCashComponent } from './insert-cash/insert-cash.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CollectComponent } from './collect/collect.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SacnNRICComponent,
    OrderCollectComponent,
    OrderDetailComponent,
    LocationComponent,
    PaymentComponent,
    InsertCashComponent,
    OrderSuccessComponent,
    CollectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
