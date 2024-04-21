package com.group22.FlightAware.service;

import com.group22.FlightAware.dto.FlightLogisticsDto;

import java.util.List;

public interface FlightLogisticsService {
    Long createFlightLogistics(FlightLogisticsDto flightLogisticDto);

    List<FlightLogisticsDto> getAllFlightLogistics();

    FlightLogisticsDto getFlightLogisticsById(Long id);

    void updateFlightLogistics(FlightLogisticsDto flightLogistic);

    void deleteFlightLogisticsById(Long id);
}
