import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment  } from '../environments/environment.dev';
import { Weather } from '../data/Weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url:string=environment.URL+"/weather";

  constructor(private http:HttpClient) { }

  getWeather(){
    return this.http.get<Weather[]>(this.url);
  }

  deleteWeather(weatherId:number){
    return this.http.delete(this.url+"/"+weatherId);
  }

  addWeather(weather:Weather){
    return this.http.post(this.url,weather);
  }

  updateWeather(weather:Weather){
    return this.http.put(this.url,weather);
  }

  getOLAP(){
    return this.http.get<number>(this.url+"/olap");
  }
}
