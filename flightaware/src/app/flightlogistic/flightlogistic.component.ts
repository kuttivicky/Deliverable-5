import { Component, OnInit } from '@angular/core';
import { FlightLogisticService } from '../service/flightlogistic.service';
import{
  MatDialog
} from '@angular/material/dialog';
import { FlightlogisticDialogComponent } from './flightlogistic-dialog/flightlogistic-dialog.component';
import { FlightLogistics } from '../data/FlightLogistics';

@Component({
  selector: 'app-flightlogistic',
  templateUrl: './flightlogistic.component.html',
  styleUrls: ['./flightlogistic.component.scss']
})
export class FlightlogisticComponent implements OnInit {
  constructor(private flightlogisticService:FlightLogisticService,public dialog: MatDialog){}

  displayedColumns: string[] = ['id', 'originTerminal', 'destinationTerminal', 'originGate', 'destinationGate', 'action'];
  dataSource=[];

  ngOnInit(): void {
      this.loadFlightLogistic();
  }

  loadFlightLogistic(){
    this.flightlogisticService.getFlightLogistic().subscribe((data)=>{
      this.dataSource=data;
      console.log(data);
    })
  }

  deleteFlightLogistic(flightlogisticId:number){
    this.flightlogisticService.deleteFlightLogistic(flightlogisticId).subscribe(()=>{
      this.loadFlightLogistic();
    })
  }

  openDialogToAdd(): void {
    const dialogRef = this.dialog.open(FlightlogisticDialogComponent, {
      data: {logisticId: "", originTerminal:"", destinationTerminal:"", originGate:"", destinationGate: "", isUpdate:false},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loadFlightLogistic();
      }
    });
  }


  openDialogToUpdate(data:FlightLogistics): void {
    console.log(data)
    const dialogRef = this.dialog.open(FlightlogisticDialogComponent, {
      data: {logisticId:data.logisticId, originTerminal:data.originTerminal, destinationTerminal:data.destinationTerminal, originGate:data.originGate, destinationGate:data.destinationGate, isUpdate: true},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loadFlightLogistic();
      }
    });
  }
}
