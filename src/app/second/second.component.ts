import { Component, OnInit, Input } from '@angular/core';
import { Checkup } from '../Checkup';
import { DataService } from '../data.service';
import { CustomerService } from '../customer.service';
import { ResInformation } from '../ResInfomation';



declare const sec_map: any;
declare const dataTrans: any;
declare const getOptionName: any;

/* enableProdMode(); */

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers: [DataService]
})


export class SecondComponent implements OnInit {

  checkup: Checkup[];
  res_info: ResInformation;
  optionNames = new Array();

  constructor(private dataService: DataService, private customerService: CustomerService) { }

  getCustomers() {
    (this.dataService.create(this.customerService.data()).then(checkup => this.checkup = checkup));
  }

  ngOnInit(): void {

    this.getCustomers();
    this.customerService.setFlag(true);
    var repeat = setInterval(function () {
      if (document.getElementById("mapShow") == null || document.getElementById("map") == null) {
        console.log("loading");
      } else {
        document.getElementById("loader").style.display = "none";
        document.getElementById("container").style.display = "block";
        document.getElementById("mapShow").click();
        clearInterval(repeat);
      }
    }, 1000);

    console.log(this.customerService.data());
  }

  private data() {
    this.res_info = dataTrans();
  }

  private mapShow(inspection_item: String, cancer_name: String, hos_addr: String[], hos_name: String[], hos_no: String[]) {
    this.optionNames = getOptionName(0);
    document.getElementById("info_title").style.display = "block";
    if (this.customerService.data().hosRecCheck == 0 || inspection_item == "검사가 필요한 항목이 없습니다." || cancer_name == "갑상선암" || cancer_name == "폐암" || hos_addr[0] == "") {
      document.getElementById("info_title").style.display = "none";
      if (hos_addr[0] == "" || cancer_name == "갑상선암" || cancer_name == "폐암") {
        document.getElementById("info_title_no").style.display = "block";
      }
      return;
    }
    sec_map(hos_addr, hos_name, hos_no, this.dataService, this.res_info);
  }
}