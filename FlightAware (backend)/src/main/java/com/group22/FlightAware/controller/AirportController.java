package com.group22.FlightAware.controller;


import com.group22.FlightAware.dto.AirportDto;
import com.group22.FlightAware.service.AirportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/airport")
@CrossOrigin(origins = "*")
public class AirportController {

    @Autowired
    private AirportService service;

    @PostMapping
    public ResponseEntity<Long> createAirport(@RequestBody AirportDto airport){
        return new ResponseEntity<>(service.createAirport(airport), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<AirportDto>> getAllAirport(){
        return new ResponseEntity<>(service.getAllAirport(),HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AirportDto> getAirportById(@PathVariable("id") Long id){
        return new ResponseEntity<>(service.getAirportById(id),HttpStatus.ACCEPTED);
    }

    @PutMapping
    public ResponseEntity updateAirport(@RequestBody AirportDto airport){
        service.updateAirport(airport);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteAirportById(@PathVariable("id") Long id){
        service.deleteAirportById(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}

