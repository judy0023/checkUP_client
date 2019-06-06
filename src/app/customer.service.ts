import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer: Customer;
  flag: boolean = true;

  constructor() { }

  setCustomer(customr) {
    if (this.flag) {
      this.customer = customr;
    }
    this.flag = true;
  }

  data() {
    return this.customer;
  }

  setFlag(flag) {
    this.flag = flag;
  }

  getFlag() {
    return this.flag
  }
}
