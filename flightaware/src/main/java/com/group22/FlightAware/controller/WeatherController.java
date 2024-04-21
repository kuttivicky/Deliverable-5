package com.group22.FlightAware.controller;

import com.group22.FlightAware.dto.WeatherDto;
import com.group22.FlightAware.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/weather")
@CrossOrigin(origins = "*")
public class WeatherController {

    @Autowired
    private WeatherService service;

    @PostMapping
    public ResponseEntity<Long> createWeather(@RequestBody WeatherDto weather){
        return new ResponseEntity<>(service.createWeather(weather), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<WeatherDto>> getAllWeather(){
        return new ResponseEntity<>(service.getAllWeather(),HttpStatus.ACCEPTED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<WeatherDto> getWeatherById(@PathVariable("id") Long id){
        return new ResponseEntity<>(service.getWeatherById(id),HttpStatus.ACCEPTED);
    }

    @PutMapping
    public ResponseEntity updateWeather(@RequestBody WeatherDto weather){
        service.updateWeather(weather);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteWeatherById(@PathVariable("id") Long id){
        service.deleteWeatherById(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }


    @GetMapping("/olap")
    public ResponseEntity<List<?>> olapOperation(){
        return new ResponseEntity<>(service.olapOperation(),HttpStatus.OK);
    }
}
