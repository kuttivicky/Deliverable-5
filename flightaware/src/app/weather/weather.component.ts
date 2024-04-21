import { Component, Inject, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import {
  MatDialog
} from '@angular/material/dialog';
import { WeatherDialogComponent } from './weather-dialog/weather-dialog.component';
import { Weather } from '../data/Weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  constructor(private weatherService:WeatherService,public dialog: MatDialog){}

  displayedColumns: string[] = ['id','airportsId', 'timeStamp', 'windSpeed','windDirection','visibility','action'];
  dataSource = [];
  olapData:any=[];

  ngOnInit(): void {
   this.loadWeather();
  }

  loadWeather(){
    this.weatherService.getWeather().subscribe((data)=>{
      this.dataSource=data;
      console.log(data);
    })

  }

  deleteWeather(weatherId:number){
    this.weatherService.deleteWeather(weatherId).subscribe(()=>{
      this.loadWeather();
    })
  }

  openDialogToAdd(): void {
    const dialogRef = this.dialog.open(WeatherDialogComponent, {
      data: {airports: "",timeStamp: "",visibility: "",windDirection:"",windSpeed:"" , isUpdate:false },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loadWeather();
      }
    });
  }

  openDialogToUpdate(data:Weather): void {
    console.log(data)
    const dialogRef = this.dialog.open(WeatherDialogComponent, {
      data: {weatherId:data.weatherId,airportsId:data.airportsId, timeStamp:data.timeStamp, visibility:data.visibility,windDirection:data.windDirection,windSpeed:data.windSpeed, isUpdate: true},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loadWeather();
      }
    });
  }
  showOLAP(){
    this.weatherService.getOLAP().subscribe((data)=>{
      console.log(data);
      this.olapData=data;
    })
  }
}
