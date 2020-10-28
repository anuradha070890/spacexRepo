import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSpaceXData():Observable<any> {
    const url = "https://api.spacexdata.com/v3/launches?limit=100"
    let headers = new HttpHeaders();
    return this.http.get(url, { headers: headers });
  }

  getSuccesslaunchDetails(parameters):Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(parameters).forEach(function (key) {
         httpParams = httpParams.append(key, parameters[key]);
    });
    let url ="https://api.spaceXdata.com/v3/launches?limit=100";
    return this.http.get(url,{ params: httpParams });
  }

}
