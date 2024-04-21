import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Airport } from '../../data/Airport';
import { AirportService } from '../../service/airport.service';

@Component({
  selector: 'app-airport-dialog',
  templateUrl: './airport-dialog.component.html',
  styleUrl: './airport-dialog.component.scss'
})
export class AirportDialogComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<AirportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private airportService:AirportService
  ) {}
 
  ngOnInit(): void {
    console.log(this.data);  
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }
  onOkayClick(){
    const airport:Airport={
      airportsId:this.data.airportsId,
      name:this.data.name,
      country:this.data.country,
      city:this.data.city,
      iataCode:this.data.iataCode
    }
    console.log(airport)
    if(this.data.isUpdate){
      console.log("update")
      this.airportService.updateAirport(airport).subscribe(()=>{
        this.dialogRef.close(true);
      })
    }else{
      console.log("add")
      this.airportService.addAirport(airport).subscribe(()=>{
        this.dialogRef.close(true);
      })
    }
  }
}
