import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment  } from '../environments/environment.dev';
import { FlightPath } from '../data/FlightPath';

@Injectable({
  providedIn: 'root'
})
export class FlightPathService {

  url:string=environment.URL+"/flightpath";

  constructor(private http:HttpClient) { }

  getFlightPath(){
    return this.http.get<FlightPath[]>(this.url);
  }

  deleteFlightPath(flightpathId:number){
    return this.http.delete(this.url+"/"+flightpathId);
  }

  addFlightPath(flightpath:FlightPath){
    return this.http.post(this.url,flightpath);
  }

  updateFlightPath(flightpath:FlightPath){
    return this.http.put(this.url,flightpath);
  }

  getAvgAltitude(){
    return this.http.get<number>(this.url+"/with");
  }
}
