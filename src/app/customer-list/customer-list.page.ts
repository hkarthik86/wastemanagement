import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.page.html',
  styleUrls: ['./customer-list.page.scss'],
})
export class CustomerListPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onclickCustomerName(){
    console.log('clicked');
    this.router.navigate(['/customer-details']);

  }

}
