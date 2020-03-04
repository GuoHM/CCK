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
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsetModule } from 'primeng/fieldset';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CreditpaymentComponent } from './creditpayment/creditpayment.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';

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
    CollectComponent,
    ConfirmationComponent,
    CreditpaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutoCompleteModule,
    FormsModule,
    BrowserAnimationsModule,
    FieldsetModule,
    OverlayPanelModule,
    CalendarModule,
    DialogModule,
    ReactiveFormsModule,
    RadioButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
