package com.group22.FlightAware.service;

import com.group22.FlightAware.dto.AirportDto;
import com.group22.FlightAware.entity.Airport;

import java.util.List;

public interface AirportService {
    Long createAirport(AirportDto airlineDto);

    List<AirportDto> getAllAirport();

    AirportDto getAirportById(Long id);

    void updateAirport(AirportDto airport);

    void deleteAirportById(Long id);
}

