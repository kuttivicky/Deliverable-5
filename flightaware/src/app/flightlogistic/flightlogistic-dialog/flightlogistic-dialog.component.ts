import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { FlightLogistics } from '../../data/FlightLogistics';
import { FlightLogisticService } from '../../service/flightlogistic.service';

@Component({
  selector: 'app-flightlogistic-dialog',
  templateUrl: './flightlogistic-dialog.component.html',
  styleUrl: './flightlogistic-dialog.component.scss'
})
export class FlightlogisticDialogComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<FlightlogisticDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private flightlogisticService:FlightLogisticService
  ){}

  ngOnInit(): void {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
  onOkayClick(){
    const flightlogistic:FlightLogistics={
      logisticId:this.data.logisticId,
      originGate:this.data.originGate,
      destinationGate:this.data.destinationGate,
      originTerminal:this.data.originTerminal,
      destinationTerminal:this.data.destinationTerminal
    }
    console.log(flightlogistic)
    if(this.data.isUpdate){
      console.log("update")
      this.flightlogisticService.updateFlightLogistic(flightlogistic).subscribe(()=>{
        this.dialogRef.close(true);
      })
    }else{
      console.log("add")
      this.flightlogisticService.addFlightLogistic(flightlogistic).subscribe(()=>{
        this.dialogRef.close(true);
      })
    }
  }
}
