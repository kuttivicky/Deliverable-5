import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Airline } from '../../data/Airline';
import { AirlineService } from '../../service/airline.service';

@Component({
  selector: 'app-airline-dialog',
  templateUrl: './airline-dialog.component.html',
  styleUrl: './airline-dialog.component.scss'
})
export class AirlineDialogComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<AirlineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private airlineService:AirlineService
  ) {}
 
  ngOnInit(): void {
    console.log(this.data);  
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }
  onOkayClick(){
    const airline:Airline={
      airlinesId:this.data.airlinesId,
      name:this.data.name,
      country:this.data.country
    }
    console.log(airline)
    if(this.data.isUpdate){
      console.log("update")
      this.airlineService.updateAirline(airline).subscribe(()=>{
        this.dialogRef.close(true);
      })
    }else{
      console.log("add")
      this.airlineService.addAirline(airline).subscribe(()=>{
        this.dialogRef.close(true);
      })
    }
  }
}
