import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { FlightPath } from '../../data/FlightPath';
import { FlightPathService } from '../../service/flightpath.service';

@Component({
  selector: 'app-flightPath-dialog',
  templateUrl: './flightPath-dialog.component.html',
  styleUrl: './flightPath-dialog.component.scss'
})
export class FlightPathDialogComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<FlightPathDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private flightPathService:FlightPathService
  ) {}
 
  ngOnInit(): void {
    console.log(this.data);  
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }
  onOkayClick(){
    const flightPath:FlightPath={
      flightpathId:this.data.flightpathId,
      flight:this.data.flight,
      recordedTime:this.data.recordedTime,
      latitude:this.data.latitude,
      longitude:this.data.longitude,
      altitude:this.data.altitude,
      speed:this.data.speed
    }
    console.log(flightPath)
    if(this.data.isUpdate){
      console.log("update")
      this.flightPathService.updateFlightPath(flightPath).subscribe(()=>{
        this.dialogRef.close(true);
      })
    }else{
      console.log("add")
      this.flightPathService.addFlightPath(flightPath).subscribe(()=>{
        this.dialogRef.close(true);
      })
    }
  }
}
