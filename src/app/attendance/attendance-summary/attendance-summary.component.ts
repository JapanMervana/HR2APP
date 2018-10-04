import { Component, OnInit } from '@angular/core';

import {AttendanceServiceService} from '../Shared/attendance-service.service';

@Component({
  selector: 'app-attendance-summary',
  templateUrl: './attendance-summary.component.html',
  styleUrls: ['./attendance-summary.component.css']
})
export class AttendanceSummaryComponent implements OnInit {

  constructor(private attendanceSummaryService : AttendanceServiceService) { }
  
  filterCriteria = {EmailID : 'japanm', Month : new Date().getMonth() , Year : new Date().getFullYear()};
  ListOfYear = [];
 
  ngOnInit() {
    for (let year = 2011; year <= new Date().getFullYear(); year++) {
      this.ListOfYear.push(year);
    }
    this.attendanceSummaryService.getAttendanceSummaryByEmailID(this.filterCriteria.EmailID + '@tblocks.com',this.filterCriteria.Year,this.filterCriteria.Month);
  }

  GetAttendanceSummaryByEmailID(){
    this.attendanceSummaryService.getAttendanceSummaryByEmailID(this.filterCriteria.EmailID + '@tblocks.com',this.filterCriteria.Year,this.filterCriteria.Month);
  }
}

