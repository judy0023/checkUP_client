import { Component, OnInit, Input, SystemJsNgModuleLoader, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

declare const getSaveCity: any;
declare const getSavePrice: any;


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent implements OnInit {

  city: number;
  price: number;

  constructor(private router: Router, public customerService: CustomerService) {

  }

  ngOnInit() {

  }

  private onSubmit() {
    this.customerService.data().city = getSaveCity();
    this.customerService.data().price = getSavePrice();

    if (this.customerService.data().hosRecCheck == 1) {

      if (this.customerService.data().city === undefined || this.customerService.data().price === undefined) {
        document.getElementById("location").style.display = "block";
      }
      if (this.customerService.data().name === undefined) {
        document.getElementById("name").style.display = "block";
      }
      if (this.customerService.data().age === undefined) {
        document.getElementById("age").style.display = "block"
      }

      if (this.customerService.data().city !== undefined && this.customerService.data().price !== undefined) {
        document.getElementById("location").style.display = "none"
      }
      if (this.customerService.data().name !== undefined) {
        document.getElementById("name").style.display = "none";
      }
      if (this.customerService.data().age !== undefined) {
        document.getElementById("age").style.display = "none"
      }

      if (this.customerService.data().city !== undefined && this.customerService.data().price !== undefined && this.customerService.data().name !== undefined && this.customerService.data().age !== undefined) {
        if (this.customerService.data().gender == 1) {
          this.router.navigate(['/man']);
        }
        else if (this.customerService.data().gender == 2) {
          this.router.navigate(['/woman']);
        }
      }
    } else {
      
      if (this.customerService.data().name === undefined || this.customerService.data().age === undefined) {
        if (this.customerService.data().name === undefined) {
          document.getElementById("name").style.display = "block";
        }
        if (this.customerService.data().age === undefined) {
          document.getElementById("age").style.display = "block"
        }
        
        if (this.customerService.data().name !== undefined) {
          document.getElementById("name").style.display = "none";
        }
        if (this.customerService.data().age !== undefined) {
          document.getElementById("age").style.display = "none"
        }
      } else {
        if (this.customerService.data().gender == 1) {
          this.router.navigate(['/man']);
        }
        else if (this.customerService.data().gender == 2) {
          this.router.navigate(['/woman']);
        }
      }
    }
  }

  private sexCheck() {
    if (this.customerService.data().gender == 1) {
      document.getElementById("sex1").style.display = "none";
      document.getElementById("sex2").style.display = "none";
      document.getElementById("sex3").style.display = "none";
    }
    else {
      document.getElementById("sex1").style.display = "inline-block"
      document.getElementById("sex2").style.display = "inline-block";
      document.getElementById("sex3").style.display = "inline-block";
    }
  }

  private onLocation() {
    console.log(this.city + "," + this.price);
    this.customerService.data().city = this.city;
    this.customerService.data().price = this.price;
  }

}

