import { Component, OnInit, Input, SystemJsNgModuleLoader, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

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
  customer: Customer;
  name: string = "";
  age: number;
  flag: boolean;

  constructor(private router: Router, public customerService: CustomerService) {

  }

  ngOnInit() {
    this.customer = new Customer();
    this.flag = this.customerService.getFlag();
    this.customerService.setCustomer(this.customer);

    var gender_man = document.getElementsByName("gender")[0] as HTMLInputElement;
    var gender_woman = document.getElementsByName("gender")[1] as HTMLInputElement;

    var sexlife_no = document.getElementsByName("sexlife")[0] as HTMLInputElement;
    var sexlife_yes = document.getElementsByName("sexlife")[1] as HTMLInputElement;

    var hospital_no = document.getElementsByName("hospital")[0] as HTMLInputElement;
    var hospital_yes = document.getElementsByName("hospital")[1] as HTMLInputElement;

    if (this.flag) {
      gender_man.checked = true;
      sexlife_no.checked = true;
      hospital_no.checked = true;
    } else {
      this.name = this.customerService.data().name;
      this.age = this.customerService.data().age;

      if (this.customerService.data().gender == 1) {
        gender_man.checked = true;
      } else {
        gender_woman.checked = true;
        document.getElementById("sex1").style.display = "inline-block"
        document.getElementById("sex2").style.display = "inline-block";
        document.getElementById("sex3").style.display = "inline-block";
      }

      if (this.customerService.data().ccancer == 0) {
        sexlife_no.checked = true;
      } else {
        sexlife_yes.checked = true;
      }

      if (this.customerService.data().hosRecCheck == 0) {
        hospital_no.checked = true;
      } else {
        hospital_yes.checked = true;
      }
      this.customerService.setFlag(true);
    }
  }

  private onSubmit() {
    this.customerService.data().city = getSaveCity();
    this.customerService.data().price = getSavePrice();

    this.customerService.data().name = this.name;
    this.customerService.data().age = this.age;

    if (this.customerService.data().hosRecCheck == 1) {

      if (this.customerService.data().city === undefined || this.customerService.data().price === undefined) {
        document.getElementById("location").style.display = "block";
      } else {
        document.getElementById("location").style.display = "none"
      }

      if (this.customerService.data().name == "") {
        document.getElementById("name").style.display = "block";
      } else {
        document.getElementById("name").style.display = "none";
      }

      if (this.customerService.data().age == null) {
        document.getElementById("age_Num").style.display = "none"
        document.getElementById("age").style.display = "block"
      } else {
        document.getElementById("age").style.display = "none"
        if (this.customerService.data().age < 0) {
          document.getElementById("age_Num").style.display = "block"
        }
      }

      if (this.customerService.data().city !== undefined && this.customerService.data().price !== undefined
        && this.customerService.data().name != "" && this.customerService.data().age != null) {
        if (this.customerService.data().gender == 1) {
          this.router.navigate(['/man']);
        } else {
          this.router.navigate(['/woman']);
        }
      }
    } else {

      if (this.customerService.data().name == "" || this.customerService.data().age == null) {
        if (this.customerService.data().name == "") {
          document.getElementById("name").style.display = "block";
        } else {
          document.getElementById("name").style.display = "none";
        }

        if (this.customerService.data().age == null) {
          document.getElementById("age_Num").style.display = "none"
          document.getElementById("age").style.display = "block"
        } else {
          document.getElementById("age").style.display = "none"
          if (this.customerService.data().age < 0) {
            document.getElementById("age_Num").style.display = "block"
          }
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

