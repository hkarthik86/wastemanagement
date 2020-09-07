import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-search',
  templateUrl: './driver-search.page.html',
  styleUrls: ['./driver-search.page.scss'],
})
export class DriverSearchPage implements OnInit {

  driverId: string = '';
  constructor(private router: Router) {}

  ngOnInit() {}
  
  searchDriver() {
    console.log(this.driverId);
    this.router.navigate(['/customer-list']);
  }
}
