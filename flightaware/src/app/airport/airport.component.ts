import { Component, OnInit } from '@angular/core';
import { AirportService } from '../service/airport.service';
import {
  MatDialog
} from '@angular/material/dialog';
import { AirportDialogComponent } from './airport-dialog/airport-dialog.component';
import { Airport } from '../data/Airport';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.scss']
})
export class AirportComponent implements OnInit {
  constructor(private airportService:AirportService,public dialog: MatDialog){}

  displayedColumns: string[] = ['id', 'name', 'country','city','iataCode','action'];
  dataSource = [];

  ngOnInit(): void {
   this.loadAirport();
  }

  loadAirport(){
    this.airportService.getAirport().subscribe((data)=>{
      this.dataSource=data;
      console.log(data);
    })

  }

  deleteAirport(airportId:number){
    this.airportService.deleteAirport(airportId).subscribe(()=>{
      this.loadAirport();
    })
  }

  openDialogToAdd(): void {
    const dialogRef = this.dialog.open(AirportDialogComponent, {
      data: {name: "", country: "" ,city:"",iataCode:"", isUpdate:false },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loadAirport();
      }
    });
  }

  openDialogToUpdate(data:Airport): void {
    console.log(data)
    const dialogRef = this.dialog.open(AirportDialogComponent, {
      data: {airportsId:data.airportsId, name:data.name, country:data.country,city:data.city,iataCode:data.iataCode, isUpdate: true},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.loadAirport();
      }
    });
  }
  
}
