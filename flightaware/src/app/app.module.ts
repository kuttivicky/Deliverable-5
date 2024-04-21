import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AirlineComponent } from './airline/airline.component';
import { AircraftComponent } from './aircraft/aircraft.component';
import { AirportComponent } from './airport/airport.component';
import { FlightComponent } from './flight/flight.component';
import { FlightpathComponent } from './flightpath/flightpath.component';
import { FlightlogisticComponent } from './flightlogistic/flightlogistic.component';
import { WeatherComponent } from './weather/weather.component';
import { MatButtonModule } from '@angular/material/button';
import { AirlineDialogComponent } from './airline/airline-dialog/airline-dialog.component';
import {  MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AircraftDialogComponent } from './aircraft/aircraft-dialog/aircraft-dialog.component';
import { AirportDialogComponent } from './airport/airport-dialog/airport-dialog.component';
import { WeatherDialogComponent } from './weather/weather-dialog/weather-dialog.component';
import { FlightDialogComponent } from './flight/flight-dialog/flight-dialog.component';
import { FlightPathDialogComponent } from './flightpath/flightpath-dialog/flightpath-dialog.component';
import { FlightlogisticDialogComponent } from './flightlogistic/flightlogistic-dialog/flightlogistic-dialog.component';
import { HomeComponent } from './home/home.component';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    declarations: [
        AppComponent,
        AirlineComponent,
        AircraftComponent,
        AirportComponent,
        FlightComponent,
        FlightpathComponent,
        FlightlogisticComponent,
        WeatherComponent,
        AirlineDialogComponent,
        AircraftDialogComponent,
        AirportDialogComponent,
        WeatherDialogComponent,
        FlightDialogComponent,
        FlightPathDialogComponent,
        FlightlogisticDialogComponent,
        HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatSelectModule,
        AppRoutingModule,
        MatTabsModule,
        MatTableModule,
        MatFormFieldModule,
        MatCheckboxModule
    ]
})
export class AppModule { }
