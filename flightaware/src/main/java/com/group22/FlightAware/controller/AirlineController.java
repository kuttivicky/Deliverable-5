package com.group22.FlightAware.controller;

import com.group22.FlightAware.dto.AirlineDto;
import com.group22.FlightAware.dto.FlightDto;
import com.group22.FlightAware.service.AirlineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/airline")
@CrossOrigin(origins = "*")
public class AirlineController {

    @Autowired
    private AirlineService service;

    @PostMapping
    public ResponseEntity<Long> createAirline(@RequestBody AirlineDto airline){
        return new ResponseEntity<>(service.createAirLine(airline), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<AirlineDto>> getAllAirline(){
        return new ResponseEntity<>(service.getAllAirline(),HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AirlineDto> getAirlineById(@PathVariable("id") Long id){
        return new ResponseEntity<>(service.getAirlineById(id),HttpStatus.ACCEPTED);
    }

    @PutMapping
    public ResponseEntity updateAirline(@RequestBody AirlineDto airline){
        service.updateAirline(airline);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteAirlineById(@PathVariable("id") Long id){
        service.deleteAirlineById(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}/flights")
    public ResponseEntity<List<FlightDto>> getAirlinesByFlightId(@PathVariable("id") Long id){
        return new ResponseEntity(service.getAirlinesByFlightId(id),HttpStatus.OK);
    }
}
