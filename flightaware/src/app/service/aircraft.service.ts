import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment  } from '../environments/environment.dev';
import { Aircraft } from '../data/Aircraft';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  url:string=environment.URL+"/aircraft";

  constructor(private http:HttpClient) { }

  getAircraft(){
    return this.http.get<Aircraft[]>(this.url);
  }

  deleteAircraft(aircraftId:number){
    return this.http.delete(this.url+"/"+aircraftId);
  }

  addAircraft(aircraft:Aircraft){
    return this.http.post(this.url,aircraft);
  }

  updateAircraft(aircraft:Aircraft){
    return this.http.put(this.url,aircraft);
  }
  getAircraftByType(type:string[]){
    return this.http.post<Aircraft[]>(this.url+"/in",type);
  }
}
