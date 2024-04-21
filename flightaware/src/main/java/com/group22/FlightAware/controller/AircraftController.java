package com.group22.FlightAware.controller;

import com.group22.FlightAware.dto.AircraftAgrDto;
import com.group22.FlightAware.dto.AircraftDto;
import com.group22.FlightAware.dto.AirlineDto;
import com.group22.FlightAware.entity.Aircraft;
import com.group22.FlightAware.service.AircraftService;
import com.group22.FlightAware.service.AirlineService;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Getter
@RequestMapping("/aircraft")
@CrossOrigin(origins = "*")
public class AircraftController {

    @Autowired
    private AircraftService service;

    @PostMapping
    public ResponseEntity<Long> createAircraft(@RequestBody AircraftDto aircraft){
        return new ResponseEntity<>(service.createAircraft(aircraft), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<AircraftDto>> getAllAircraft(){
        return new ResponseEntity<>(service.getAllAircraft(),HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AircraftDto> getAircraftById(@PathVariable("id") Long id){
        return new ResponseEntity<>(service.getAircraftById(id),HttpStatus.ACCEPTED);
    }

    @PutMapping
    public ResponseEntity updateAircraft(@RequestBody AircraftDto aircraft){
        service.updateAircraft(aircraft);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteAircraftById(@PathVariable("id") Long id){
        service.deleteAircraftById(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @GetMapping("/agr")
    public ResponseEntity<List<?>> getAGR(){
        return new ResponseEntity<>(service.getAGR(),HttpStatus.OK);
    }
    @PostMapping("/in")
    public ResponseEntity<List<AircraftDto>> getIn(@RequestBody List<String> type ){
        return new ResponseEntity<>(service.getIn(type),HttpStatus.OK);
    }
}
