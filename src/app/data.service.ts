import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';


import { Customer } from './customer';
import { Checkup } from './Checkup';

import 'rxjs/add/operator/toPromise';
import { ResInformation } from './ResInfomation';
import { HosSearchResult } from './HosSearchResult';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'api/customers';  //URL to web API
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  create(customer: Customer): Promise<Checkup[]> {
    return this.http
      .post(this.baseUrl, JSON.stringify(customer), { headers: this.headers })
      .toPromise()
      .then(response => response.json() as Checkup)
      .catch(this.handleError);
  }

  create_info(name : string, id : string) : Promise<ResInformation>{
    console.log(name + ",," + id);
    const url = `api/hos_names/${name}/hos_nos/${id}`;
    
    return this.http
    .get(url)
    .toPromise()
    .then(response => response.json() as ResInformation)
    .catch(this.handleError);   
  }

  create_hos_info(city : string, price : string, something : string) : Promise<HosSearchResult>{
    console.log(city + ",," + price + ",," + something);
    const url = `api/siDoCd/${city}/siGunGuCd/${price}/hchType/${something}`;
    
    return this.http
    .get(url)
    .toPromise()
    .then(response => response.json() as HosSearchResult)
    .catch(this.handleError);   
  }

  handleError(error: any): Promise<any> {
    console.error('Error:', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}