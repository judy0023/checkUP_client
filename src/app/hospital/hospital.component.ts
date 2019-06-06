import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HosSearchResult } from '../HosSearchResult';
import { ResInformation } from '../ResInfomation';
import { async } from '@angular/core/testing';

declare const sendData: any;
declare const returnHosSearchResult: any;
declare const hos_map: any;
declare const dataTrans: any;

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  hosSearchResult: HosSearchResult = null;
  res_info : ResInformation = null;

  constructor(private dataService: DataService) { 
  }

  ngOnInit() {
    console.log("hhh");
    
    document.getElementById("hospital").click();
    sendData(this.dataService, this.hosSearchResult, this.res_info);
  }

  private returnHos() {
    document.getElementById("loader").style.display = "block";
    document.getElementById("container").style.display = "none";
    this.hosSearchResult = returnHosSearchResult();
    var repeat = setInterval(function(){
      if(document.getElementById("mapShow") == null) {
        console.log("loading");      
      } else {
        document.getElementById("loader").style.display = "none";
        document.getElementById("container").style.display = "block";
        document.getElementById("mapShow").click();
        clearInterval(repeat);
      }
     }, 1000);
  }

  private data() {
    this.res_info = dataTrans();
  }

  private mapShow(hos_addr: String[], hos_name: String[], hos_no: String[]) {
    console.log(hos_addr + " " + hos_name + " " + hos_no  );
    hos_map(hos_addr, hos_name, hos_no, this.dataService, this.res_info);
  
  }
}
