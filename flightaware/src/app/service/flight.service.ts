import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment  } from '../environments/environment.dev';
import { Flight } from '../data/Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  url:string=environment.URL+"/flight";

  constructor(private http:HttpClient) { }

  getFlight(){
    return this.http.get<Flight[]>(this.url);
  }

  deleteFlight(flightId:number){
    return this.http.delete(this.url+"/"+flightId);
  }

  addFlight(flight:Flight){
    return this.http.post(this.url,flight);
  }

  updateFlight(flight:Flight){
    return this.http.put(this.url,flight);
  }

  getFlightByStatus(status:string){
    return this.http.get<Flight[]>(this.url+"/status/"+status);
  }
}
