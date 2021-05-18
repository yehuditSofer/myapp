import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddingDonationComponent } from './adding-donation/adding-donation.component';
import { LineDonationComponent } from './line-donation/line-donation.component';
// import {InputTextModule} from 'primeng/inputtext';
// import { MdbModule } from ''; 

@NgModule({
  declarations: [
    AppComponent,
    AddingDonationComponent,
    LineDonationComponent,
    // InputTextModule
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
