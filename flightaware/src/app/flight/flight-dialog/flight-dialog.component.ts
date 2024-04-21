import { Component, Inject, OnInit } from '@angular/core';
import { 
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Flight } from '../../data/Flight';
import { FlightService } from '../../service/flight.service';

@Component({
  selector: 'app-flight-dialog',
  templateUrl: './flight-dialog.component.html',
  styleUrl: './flight-dialog.component.scss'
})
export class FlightDialogComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<FlightDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private flightService:FlightService
  ){}

  ngOnInit(): void {
    console.log(this.data);  
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }
  onOkayClick(){
    const flight:Flight={
      flightsId:this.data.flightsId,
      airline:this.data.airline,
      originAirportID:this.data.originAirportID,
      destinationAirportID:this.data.destinationAirportID,
      departureTime:this.data.departureTime,
      arrivalTime:this.data.arrivalTime,
      status:this.data.status
    }
    console.log(flight)
    if(this.data.isUpdate){
      console.log("update")
      this.flightService.updateFlight(flight).subscribe(()=>{
        this.dialogRef.close(true);
      })
    }else{
      console.log("add")
      this.flightService.addFlight(flight).subscribe(()=>{
        this.dialogRef.close(true);
      })
    }
  }
}
