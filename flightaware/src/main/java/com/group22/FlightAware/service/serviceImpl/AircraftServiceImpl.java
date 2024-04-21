package com.group22.FlightAware.service.serviceImpl;

import com.group22.FlightAware.dto.AircraftAgrDto;
import com.group22.FlightAware.dto.AircraftDto;
import com.group22.FlightAware.entity.Aircraft;
import com.group22.FlightAware.entity.Airline;
import com.group22.FlightAware.repository.AircraftRepository;
import com.group22.FlightAware.service.AircraftService;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Builder
public class AircraftServiceImpl implements AircraftService {

    @Autowired
    private AircraftRepository aircraftsRepository;

    @Autowired
    private EntityManager entityManager;

    @Override
    public Long createAircraft(AircraftDto aircraftDto) {
        return aircraftsRepository.save(Aircraft.builder()
                        .airline(Airline.builder().airlinesId(aircraftDto.getAirline()).build())
                        .type(aircraftDto.getType())
                        .build()).
                getAircraftId();
    }

    @Override
    public List<AircraftDto> getAllAircraft() {
        return aircraftsRepository.findAll().stream().map(this::toAircraft).collect(Collectors.toList());
    }

    @Override
    public AircraftDto getAircraftById(Long id) {
        Optional<Aircraft> aircraft=aircraftsRepository.findById(id);
        return aircraft.map(this::toAircraft).orElse(null);
    }

    @Override
    public void updateAircraft(AircraftDto aircraft) {
        if(aircraftsRepository.existsById(aircraft.getAircraftId())){
            aircraftsRepository.save(toAircraftDto(aircraft));
        }
    }

    @Override
    public void deleteAircraftById(Long id) {
        if(aircraftsRepository.existsById(id))
            aircraftsRepository.deleteById(id);
    }

    @Override
    public List<?> getAGR() {
        Query query=entityManager.createNativeQuery("SELECT COUNT(aircraft_id), airline.name FROM aircraft join airline on aircraft.airline_Id=airline.airlines_id\n" +
                "group by aircraft.airline_id,airline.name;");
        return query.getResultList();
    }

    @Override
    public List<AircraftDto> getIn(List<String> type) {
       return aircraftsRepository.findAllByTypeIn(type).stream().map(this::toAircraft).collect(Collectors.toList());
    }

    private AircraftDto toAircraft(Aircraft aircraft){
        return AircraftDto.builder().aircraftId(aircraft.getAircraftId())
                .airline(aircraft.getAirline().getAirlinesId())
                .type(aircraft.getType()).build();
    }

    private Aircraft toAircraftDto(AircraftDto aircraft){
        return Aircraft.builder()
                .aircraftId(aircraft.getAircraftId())
                .airline(Airline.builder().airlinesId(aircraft.getAirline()).build())
                .type(aircraft.getType())
                .build();
    }


}
