import { Component, OnInit } from '@angular/core';
import { FlightPathService } from '../service/flightpath.service';
import {
  MatDialog
} from '@angular/material/dialog';
import { FlightPathDialogComponent } from './flightpath-dialog/flightpath-dialog.component';
import { FlightPath } from '../data/FlightPath';

@Component({
  selector: 'app-flightpath',
  templateUrl: './flightpath.component.html',
  styleUrl: './flightpath.component.scss'
})
export class FlightpathComponent implements OnInit {
  constructor(private flightpathService:FlightPathService,public dialog: MatDialog){}

  displayedColumns: string[] = ['id','flight', 'recordedTime', 'altitude','latitude','longitude','speed','action'];
  dataSource = [];
  avgAltitude: number;

  ngOnInit(): void {
   this.loadFlightPath();
  }

  loadFlightPath(){
    this.flightpathService.getFlightPath().subscribe((data)=>{
      this.dataSource=data;
      console.log(data);
    })

  }

  deleteFlightPath(flightPathId:number){
    this.flightpathService.deleteFlightPath(flightPathId).subscribe(()=>{
      this.loadFlightPath();
    })
  }

  openDialogToAdd(): void {
    const dialogRef = this.dialog.open(FlightPathDialogComponent, {
      data: {recordedTime: "",flight: "", latitude: "" ,longitude:"",speed:"",altitude:"", isUpdate:false },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loadFlightPath();
      }
    });
  }

  openDialogToUpdate(data:FlightPath): void {
    console.log(data)
    const dialogRef = this.dialog.open(FlightPathDialogComponent, {
      data: {flightpathId:data.flightpathId, flight:data.flight, recordedTime:data.recordedTime, altitude:data.altitude,speed:data.speed,latitude:data.latitude,longitude:data.longitude, isUpdate: true},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loadFlightPath();
      }
    });
  }

  showAvgAltitude(){
    this.flightpathService.getAvgAltitude().subscribe((data)=>{
      console.log(data);
      this.avgAltitude=data[0];
    })
  }
}
