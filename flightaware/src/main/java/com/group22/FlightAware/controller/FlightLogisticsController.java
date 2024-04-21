package com.group22.FlightAware.controller;

import com.group22.FlightAware.dto.FlightLogisticsDto;
import com.group22.FlightAware.service.FlightLogisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/flightlogistic")
@CrossOrigin(origins = "*")
public class FlightLogisticsController {

    @Autowired
    private FlightLogisticsService service;

    @PostMapping
    public ResponseEntity<Long> createFlightLogistics(@RequestBody FlightLogisticsDto flightLogistic){
        return new ResponseEntity<>(service.createFlightLogistics(flightLogistic), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<FlightLogisticsDto>> getAllFlightLogistics(){
        return new ResponseEntity<>(service.getAllFlightLogistics(),HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FlightLogisticsDto> getFlightLogisticsById(@PathVariable("id") Long id){
        return new ResponseEntity<>(service.getFlightLogisticsById(id),HttpStatus.ACCEPTED);
    }

    @PutMapping
    public ResponseEntity updateFlightLogistics(@RequestBody FlightLogisticsDto flightLogistic){
        service.updateFlightLogistics(flightLogistic);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteFlightLogisticsById(@PathVariable("id") Long id){
        service.deleteFlightLogisticsById(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
