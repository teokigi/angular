import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

export class CustomersComponent implements OnInit {
    listData;

  constructor(
      private customerService: CustomerService,
  ) { }

  ngOnInit() {
      this.listData = this.customerService.getCustomers();
  }

}
