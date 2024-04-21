import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Weather } from '../../data/Weather';
import { WeatherService } from '../../service/weather.service';

@Component({
  selector: 'app-weather-dialog',
  templateUrl: './weather-dialog.component.html',
  styleUrl: './weather-dialog.component.scss'
})
export class WeatherDialogComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<WeatherDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private weatherService:WeatherService
  ) {}
 
  ngOnInit(): void {
    console.log(this.data);  
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }
  onOkayClick(){
    const weather:Weather={
      weatherId:this.data.weatherId,
      airportsId:this.data.airportsId,
      timeStamp:this.data.timeStamp,
      visibility:this.data.visibility,
      windDirection:this.data.windDirection,
      windSpeed:this.data.windSpeed
    }
    console.log(weather)
    if(this.data.isUpdate){
      console.log("update")
      this.weatherService.updateWeather(weather).subscribe(()=>{
        this.dialogRef.close(true);
      })
    }else{
      console.log("add")
      this.weatherService.addWeather(weather).subscribe(()=>{
        this.dialogRef.close(true);
      })
    }
  }
}
