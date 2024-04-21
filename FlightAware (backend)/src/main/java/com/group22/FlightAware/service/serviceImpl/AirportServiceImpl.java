package com.group22.FlightAware.service.serviceImpl;

import com.group22.FlightAware.dto.AirportDto;
import com.group22.FlightAware.entity.Airport;
import com.group22.FlightAware.repository.AirportsRepository;
import com.group22.FlightAware.service.AirportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AirportServiceImpl implements AirportService {

    @Autowired
    private AirportsRepository airportsRepository;

    @Override
    public Long createAirport(AirportDto airportDto) {
        return airportsRepository.save(Airport.builder()
                        .name(airportDto.getName())
                        .country(airportDto.getCountry())
                        .iataCode(airportDto.getIataCode())
                        .city(airportDto.getCity())
                        .build()).getAirportId();
    }

    @Override
    public List<AirportDto> getAllAirport() {
        return airportsRepository.findAll().stream().map(this::toAirport).collect(Collectors.toList());
    }

    @Override
    public AirportDto getAirportById(Long id) {
        Optional<Airport> airport=airportsRepository.findById(id);
        return airport.map(this::toAirport).orElse(null);
    }

    @Override
    public void updateAirport(AirportDto airport) {
        if(airportsRepository.existsById(airport.getAirportsId())){
            airportsRepository.save(toAirportDto(airport));
        }
    }

    @Override
    public void deleteAirportById(Long id) {
        if(airportsRepository.existsById(id))
            airportsRepository.deleteById(id);
    }

    private AirportDto toAirport(Airport airport){
        return AirportDto.builder().airportsId(airport.getAirportId())
                .country(airport.getCountry())
                .city(airport.getCity())
                .iataCode(airport.getIataCode())
                .name(airport.getName()).build();
    }

    private Airport toAirportDto(AirportDto airport){
        return Airport.builder()
                .airportId(airport.getAirportsId())
                .name(airport.getName())
                .country(airport.getCountry())
                .city(airport.getCity())
                .iataCode(airport.getIataCode())
                .build();
    }


}
