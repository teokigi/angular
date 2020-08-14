import { Component, OnInit } from '@angular/core';
import customerData from '../../../assets/customer_data.json';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

interface DataItem {
    id: number;
    first_name: string;
    last_name: string;
    car: string;
    gender: string;
    no_claims: boolean;
  }
  
  interface ColumnItem {
    name: string;
    sortOrder?: NzTableSortOrder;
    sortFn?: NzTableSortFn;
    listOfFilter?: NzTableFilterList;
    filterFn?: NzTableFilterFn;
    filterMultiple?: boolean;
    sortDirections?: NzTableSortOrder[];
  }

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

export class CustomersComponent implements OnInit {
    listOfData: DataItem[] = customerData;
    
    

    listOfColumns: ColumnItem[] = [
        {
            name: 'First Name',
            sortOrder: null,
            sortFn: (a: DataItem, b: DataItem) => a.first_name.localeCompare(b.first_name)
        },
        {
            name: 'Last Name'
        },
        {
            name: 'Gender',
            filterMultiple: false,
            listOfFilter:[
                {text: 'Male', value: 'Male'},
                {text: 'Female', value: 'Female'},
            ],
            filterFn: (gender: string, item: DataItem) => item.gender.indexOf(gender) !== -1
        },
        {
            name:'Car'
        },
        
        {
            name: 'No Claims',
            filterMultiple: false,
            listOfFilter:[
                {text: 'no claims', value: true},
                
            ],
            filterFn: (no_claims: string, item: DataItem) => item.no_claims
        }
    ]
    


    constructor() {      
    }

    ngOnInit() {
        console.log(this.listOfData)
    }

}
