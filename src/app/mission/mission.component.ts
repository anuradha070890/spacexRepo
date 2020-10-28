import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service'
@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  public data;
  public button=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
  public launchButton=[true,false]
  public launchLanding=[true,false]
  public selectedData;lauchStatus;landingStatus;selectedIndex;selectedIndex2;selectedIndex3;
  public requestObject={
    launch_year:"",
    launch_success:"",
    land_success:""
    
  };
    constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getSpaceXData().subscribe(resp=>{
      this.data=resp;
    })
  }

  onYearClick(year,i){
    this.selectedData=year;
    this.selectedIndex=i;
     this.requestObject.launch_year =year
     this.apiCall(this.requestObject)
  }

  onLaunchClick(launch,i){
    this.lauchStatus=launch;
    this.selectedIndex2=i;
    this.requestObject.launch_success=launch
    this.apiCall(this.requestObject)
  }

  onLaunchLandingClick(launchLanding,i){
    this.landingStatus=launchLanding;
    this.selectedIndex3=i;
    this.requestObject.land_success=launchLanding
    this.apiCall(this.requestObject)
  }

  apiCall(requestObject){
    this.dataService.getSuccesslaunchDetails(requestObject).subscribe(resp=>{
      console.log("response",resp)
      this.data=resp;
    })
  }

}
