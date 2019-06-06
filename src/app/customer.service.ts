import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer = new Customer();
  
  constructor() { }
  data() {
    return this.customer;
  }
}
