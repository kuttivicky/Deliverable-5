import { Component, Inject, OnInit } from '@angular/core';
import { FlightService } from '../service/flight.service';
import {
  MatDialog
} from '@angular/material/dialog';
import { FlightDialogComponent } from './flight-dialog/flight-dialog.component';
import { Flight } from '../data/Flight';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent {
  constructor(private flightService:FlightService,public dialog: MatDialog){}

  displayedColumns: string[] = ['id', 'originAirportID','airline', 'destinationAirportID','departureTime','arrivalTime','status','action'];
  dataSource = [];
  selectedStatus: string="All";
  statusOptions=["All","On Time","Delayed","Cancelled"];

  ngOnInit(): void {
   this.loadFlight();
  }

  loadFlight(){
    this.flightService.getFlight().subscribe((data)=>{
      this.dataSource=data;
      console.log(data);
    })

  }

  deleteFlight(flightId:number){
    this.flightService.deleteFlight(flightId).subscribe(()=>{
      this.loadFlight();
      this.selectedStatus="All";
    })
  }

  openDialogToAdd(): void {
    const dialogRef = this.dialog.open(FlightDialogComponent, {
      data: {originAirportID: "",arline: "", destinationAirportID: "", departureTime: "", arrivalTime: "", status: "" , isUpdate:false },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loadFlight();
      }
    });
  }

  openDialogToUpdate(data:Flight): void {
    console.log(data)
    const dialogRef = this.dialog.open(FlightDialogComponent, {
      data: {flightsId:data.flightsId,airline:data.airline, originAirportID:data.originAirportID, destinationAirportID:data.destinationAirportID,departureTime:data.departureTime,arrivalTime:data.arrivalTime,status:data.status, isUpdate: true},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loadFlight();
      }
    });
  }

  applyFilter(){
    if(this.selectedStatus=="All"){
      this.loadFlight();
    }else{
      this.flightService.getFlightByStatus(this.selectedStatus).subscribe((data)=>{
        this.dataSource=data;
        console.log(data);
      })
    }
  }
}
