import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.dev';
import { Airport } from '../data/Airport';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  
  url:string=environment.URL+"/airport";

  constructor(private http:HttpClient) { }

  getAirport(){
    return this.http.get<Airport[]>(this.url);
  }

  deleteAirport(airportId:number){
    return this.http.delete(this.url+"/"+airportId);
  }

  addAirport(airport:Airport){
    return this.http.post(this.url,airport);
  }

  updateAirport(airport: Airport) {
    return this.http.put(this.url,airport);
  }
}
