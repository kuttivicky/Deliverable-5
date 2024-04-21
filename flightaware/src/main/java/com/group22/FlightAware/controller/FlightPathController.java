package com.group22.FlightAware.controller;

import com.group22.FlightAware.dto.FlightPathDto;
import com.group22.FlightAware.service.FlightPathService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/flightpath")
@CrossOrigin(origins = "*")
public class FlightPathController {

    @Autowired
    private FlightPathService service;

    @PostMapping
    public ResponseEntity<Long> createFlightPath(@RequestBody FlightPathDto flightpath){
        return new ResponseEntity<>(service.createAirLine(flightpath), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<FlightPathDto>> getAllFlightPath(){
        return new ResponseEntity<>(service.getAllFlightPath(),HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FlightPathDto> getFlightPathById(@PathVariable("id") Long id){
        return new ResponseEntity<>(service.getFlightPathById(id),HttpStatus.ACCEPTED);
    }

    @PutMapping
    public ResponseEntity updateFlightPath(@RequestBody FlightPathDto flightpath){
        service.updateFlightPath(flightpath);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteFlightPathById(@PathVariable("id") Long id){
        service.deleteFlightPathById(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @GetMapping("/with")
    public ResponseEntity<?> getWith(){
        return new ResponseEntity<>(service.getWith(),HttpStatus.OK);
    }
}
