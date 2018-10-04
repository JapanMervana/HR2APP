import { Injectable } from '@angular/core';

import {AttendanceSummary} from './attendance-summary.model'
import {Http, Response, Headers, RequestOptions,RequestMethod} from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
// import { map } from 'rxjs-compat/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AttendanceServiceService {
  attendanceSummary : AttendanceSummary[];
  constructor(private http : Http ) {}

  getAttendanceSummaryByEmailID(emailID, year, month){
    this.http.get('http://localhost:51786/api/attendance',{params:{
      emailID : emailID,
      year : year,
      month : month
    }}).map((data : Response) => {
      return data.json().Response as AttendanceSummary[];
    }).toPromise().then(x=> 
      {
        this.attendanceSummary = x;
      })
  }
}
