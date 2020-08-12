import { Component, OnInit } from '@angular/core';

import * as customerData from '../../../assets/customer_data.json';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

export class CustomersComponent implements OnInit {
    listData;

    constructor() {
        console.log('reading local json files');
        console.log(customerData); 
    }

    ngOnInit() {
        this.listData = customerData;
    }

}
