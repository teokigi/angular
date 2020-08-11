import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
      private http: HttpClient
  ) { }

  getCustomers(){
      return this.http.get('../assets/customer_data.json');
  }

}
