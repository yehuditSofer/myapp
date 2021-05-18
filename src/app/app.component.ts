import { Component } from '@angular/core';
import { DonationService } from './donation.service';
// import {material} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'donation';
  constructor(private heroService: DonationService){};
  abc(){
    this.heroService.bla().subscribe(
      
    );
  }
}
