import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment  } from '../environments/environment.dev';
import { FlightLogistics } from '../data/FlightLogistics';

@Injectable({
  providedIn: 'root'
})
export class FlightLogisticService {

  url:string=environment.URL+"/flightlogistic";

  constructor(private http:HttpClient) { }

  getFlightLogistic(){
    return this.http.get<FlightLogistics[]>(this.url);
  }

  deleteFlightLogistic(flightlogisticId:number){
    return this.http.delete(this.url+"/"+flightlogisticId);
  }

  addFlightLogistic(flightlogistic:FlightLogistics){
    return this.http.post(this.url,flightlogistic);
  }

  updateFlightLogistic(flightlogistic:FlightLogistics){
    return this.http.put(this.url,flightlogistic);
  }
}
