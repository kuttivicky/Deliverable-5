import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.dev';
import { Airline } from '../data/Airline';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {
  
  url:string=environment.URL+"/airline";

  constructor(private http:HttpClient) { }

  getAirlines(){
    return this.http.get<Airline[]>(this.url);
  }

  deleteAirline(airlineId:number){
    return this.http.delete(this.url+"/"+airlineId);
  }

  addAirline(airline:Airline){
    return this.http.post(this.url,airline);
  }

  updateAirline(airline: Airline) {
    return this.http.put(this.url,airline);
  }

  getAircrafts(){
    return this.http.get<Airline[]>(environment.URL+"/aircraft/agr");
  }
}
