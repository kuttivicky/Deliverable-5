import { Component, Inject, OnInit } from '@angular/core';
import { AirlineService } from '../service/airline.service';
import {
  MatDialog
} from '@angular/material/dialog';
import { AirlineDialogComponent } from './airline-dialog/airline-dialog.component';
import { Airline } from '../data/Airline';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.scss']
})
export class AirlineComponent implements OnInit {
  constructor(private airlineService:AirlineService,public dialog: MatDialog){}

  displayedColumns: string[] = ['id', 'name', 'country','action'];
  dataSource = [];
  airCrafts:any=[];

  ngOnInit(): void {
   this.loadAirlines();
  }

  loadAirlines(){
    this.airlineService.getAirlines().subscribe((data)=>{
      this.dataSource=data;
      console.log(data);
    })

  }

  deleteAirline(airlineId:number){
    this.airlineService.deleteAirline(airlineId).subscribe(()=>{
      this.loadAirlines();
    })
  }

  openDialogToAdd(): void {
    const dialogRef = this.dialog.open(AirlineDialogComponent, {
      data: {name: "", country: "" , isUpdate:false },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loadAirlines();
      }
    });
  }

  openDialogToUpdate(data:Airline): void {
    console.log(data)
    const dialogRef = this.dialog.open(AirlineDialogComponent, {
      data: {airlinesId:data.airlinesId, name:data.name, country:data.country, isUpdate: true},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loadAirlines();
      }
    });
  }
  showAirCrafts(){
    this.airlineService.getAircrafts().subscribe((data)=>{
      this.airCrafts=data;
    })
  }
  
}
