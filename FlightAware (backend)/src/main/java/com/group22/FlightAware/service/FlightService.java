package com.group22.FlightAware.service;

import com.group22.FlightAware.dto.FlightDto;

import java.util.List;

public interface FlightService {
    Long createFlight(FlightDto flightDto);

    List<FlightDto> getAllFlight();

    FlightDto getFlightById(Long id);

    void updateFlight(FlightDto flight);

    void deleteFlightById(Long id);

    List<FlightDto> getFlightByStatus(String status);
}
