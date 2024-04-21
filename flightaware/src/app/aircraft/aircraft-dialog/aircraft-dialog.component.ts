import { Component, Inject, OnInit } from '@angular/core';
import{
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Aircraft } from '../../data/Aircraft';
import { AircraftService } from '../../service/aircraft.service';
@Component({
  selector: 'app-aircraft-dialog',
  templateUrl: './aircraft-dialog.component.html',
  styleUrl: './aircraft-dialog.component.scss'
})
export class AircraftDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AircraftDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private aircraftService:AircraftService
  ){}
  
  ngOnInit(): void {
    console.log(this.data);  
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }
  onOkayClick(){
    const aircraft:Aircraft={
      aircraftId:this.data.aircraftId,
      airline:this.data.airline,
      type:this.data.type
    }
    console.log(aircraft)
    if(this.data.isUpdate){
      console.log("update")
      this.aircraftService.updateAircraft(aircraft).subscribe(()=>{
        this.dialogRef.close(true);
      },(error)=>{
        alert("The airline id does not exist")
        this.dialogRef.close(false);
      })
    }else{
      console.log("add")
      this.aircraftService.addAircraft(aircraft).subscribe(()=>{
        this.dialogRef.close(true);
      },(error)=>{
        alert("The airline id does not exist")
        this.dialogRef.close(false);
      })
    }
  }
}
