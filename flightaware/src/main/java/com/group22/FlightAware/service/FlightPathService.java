package com.group22.FlightAware.service;

import com.group22.FlightAware.dto.FlightPathDto;

import java.util.List;

public interface FlightPathService {
    Long createAirLine(FlightPathDto flightPathDto);

    List<FlightPathDto> getAllFlightPath();

    FlightPathDto getFlightPathById(Long id);

    void updateFlightPath(FlightPathDto flightpath);

    void deleteFlightPathById(Long id);

    Object getWith();
}
