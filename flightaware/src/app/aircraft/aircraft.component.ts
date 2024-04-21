import { Component, OnInit } from '@angular/core';
import { AircraftService } from '../service/aircraft.service';
import {
  MatDialog
} from '@angular/material/dialog';
import { AircraftDialogComponent } from './aircraft-dialog/aircraft-dialog.component';
import { Aircraft } from '../data/Aircraft';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.scss']
})
export class AircraftComponent  implements OnInit {
  constructor(private aircraftService:AircraftService,public dialog: MatDialog){}

  displayedColumns: string[] = ['id', 'type','airline', 'action'];
  airlineOptions: string[]=[];
  airlineSelectedOptions: string[]=[];
  dataSource = [];

  ngOnInit(): void {
   this.loadAircraft();
  }

  loadAircraft(){
    this.aircraftService.getAircraft().subscribe((data)=>{
      this.dataSource=data;
      this.dataSource.forEach((element)=>{
        console.log(element.type);
        if(this.airlineOptions.indexOf(element.type)==-1)
          this.airlineOptions.push(element.type);
      });
      console.log(data);
    })

  }

  deleteAircraft(aircraftId:number){
    this.aircraftService.deleteAircraft(aircraftId).subscribe(()=>{
      this.loadAircraft();
    })
  }

  openDialogToAdd(): void {
    const dialogRef = this.dialog.open(AircraftDialogComponent, {
      data: {type: "", isUpdate:false },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loadAircraft();
      }
    });
  }

  openDialogToUpdate(data:Aircraft): void {
    console.log(data)
    const dialogRef = this.dialog.open(AircraftDialogComponent, {
      data: {aircraftId:data.aircraftId,airline:data.airline, type:data.type, isUpdate: true},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loadAircraft();
      }
    });
  }
  selectedAirline(event:any,airline:string){
    if(event.checked){
      this.airlineSelectedOptions.push(airline);
    }else{
      this.airlineSelectedOptions=this.airlineSelectedOptions.filter((element)=>element!=airline);
    }
    console.log(this.airlineSelectedOptions);
  }
  applyFilter(){
    if(this.airlineSelectedOptions.length>0){
      this.aircraftService.getAircraftByType(this.airlineSelectedOptions).subscribe((data)=>{
        this.dataSource=data;
        console.log(data);
      })
    }
    else{
      this.loadAircraft();
    }
  }
}
