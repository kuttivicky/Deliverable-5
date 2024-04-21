package com.group22.FlightAware.service;

import com.group22.FlightAware.dto.AircraftAgrDto;
import com.group22.FlightAware.dto.AircraftDto;
import com.group22.FlightAware.entity.Aircraft;

import java.util.List;

public interface AircraftService {
    Long createAircraft(AircraftDto aircraftDto);

    List<AircraftDto> getAllAircraft();

    AircraftDto getAircraftById(Long id);

    void updateAircraft(AircraftDto aircraft);

    void deleteAircraftById(Long id);

    List<?> getAGR();

    List<AircraftDto> getIn(List<String> type);
}
