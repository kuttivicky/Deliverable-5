package com.group22.FlightAware.service.serviceImpl;

import com.group22.FlightAware.dto.FlightDto;
import com.group22.FlightAware.entity.Airline;
import com.group22.FlightAware.entity.Flight;
import com.group22.FlightAware.repository.FlightsRepository;
import com.group22.FlightAware.service.FlightService;
import lombok.Builder;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Builder
@Getter
public class FlightServiceImpl implements FlightService {

    @Autowired
    private FlightsRepository flightsRepository;

    @Override
    public Long createFlight(FlightDto flightDto) {
        return flightsRepository.save(Flight.builder()
                        .originAirportID(flightDto.getOriginAirportID())
                        .airline(Airline.builder().airlinesId(flightDto.getAirline()).build())
                        .destinationAirportID(flightDto.getDestinationAirportID())
                        .departureTime(flightDto.getDepartureTime())
                        .arrivalTime(flightDto.getArrivalTime())
                        .status(flightDto.getStatus())
                        .build()).
                getFlightId();
    }

    @Override
    public List<FlightDto> getAllFlight() {
        return flightsRepository.findAll().stream().map(this::toFlight).collect(Collectors.toList());
    }

    @Override
    public FlightDto getFlightById(Long id) {
        Optional<Flight> flight=flightsRepository.findById(id);
        return flight.map(this::toFlight).orElse(null);
    }

    @Override
    public void updateFlight(FlightDto flight) {
        if(flightsRepository.existsById(flight.getFlightsId())){
            flightsRepository.save(toFlightDto(flight));
        }
    }

    @Override
    public void deleteFlightById(Long id) {
        if(flightsRepository.existsById(id))
            flightsRepository.deleteById(id);
    }

    @Override
    public List<FlightDto> getFlightByStatus(String status) {
        return flightsRepository.findByStatus(status).stream().map(this::toFlight).collect(Collectors.toList());
    }

    public  FlightDto toFlight(Flight flight){
        return FlightDto.builder().flightsId(flight.getFlightId())
                .airline(flight.getAirline().getAirlinesId())
                .originAirportID(flight.getOriginAirportID())
                .destinationAirportID(flight.getDestinationAirportID())
                .departureTime(flight.getDepartureTime())
                .arrivalTime(flight.getArrivalTime())
                .status(flight.getStatus()).build();
    }

    public Flight toFlightDto(FlightDto flight){
        return Flight.builder()
                .flightId(flight.getFlightsId())
                .airline(Airline.builder().airlinesId(flight.getAirline()).build())
                .originAirportID(flight.getOriginAirportID())
                .destinationAirportID(flight.getDestinationAirportID())
                .departureTime(flight.getDepartureTime())
                .arrivalTime(flight.getArrivalTime())
                .status(flight.getStatus())
                .build();
    }


}
