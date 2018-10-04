import { Component, OnInit } from '@angular/core';

import {AttendanceServiceService} from './Shared/attendance-service.service'

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
  providers:[AttendanceServiceService]
})
export class AttendanceComponent implements OnInit {

  constructor(private attendanceService : AttendanceServiceService) { }

  ngOnInit() {
  }

}
