package com.group22.FlightAware.controller;

import com.group22.FlightAware.dto.FlightDto;
import com.group22.FlightAware.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/flight")
@CrossOrigin(origins = "*")
public class FlightController {

    @Autowired
    private FlightService service;

    @PostMapping
    public ResponseEntity<Long> createFlight(@RequestBody FlightDto flight){
        return new ResponseEntity<>(service.createFlight(flight), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<FlightDto>> getAllFlight(){
        return new ResponseEntity<>(service.getAllFlight(),HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FlightDto> getFlightById(@PathVariable("id") Long id){
        return new ResponseEntity<>(service.getFlightById(id),HttpStatus.ACCEPTED);
    }

    @PutMapping
    public ResponseEntity updateFlight(@RequestBody FlightDto flight){
        service.updateFlight(flight);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteFlightById(@PathVariable("id") Long id){
        service.deleteFlightById(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<FlightDto>> getFlightByStatus(@PathVariable("status") String status){
        return new ResponseEntity<>(service.getFlightByStatus(status), HttpStatus.OK);
    }
}
