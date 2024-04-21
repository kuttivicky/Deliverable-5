package com.group22.FlightAware.service.serviceImpl;

import com.group22.FlightAware.dto.FlightLogisticsDto;
import com.group22.FlightAware.entity.FlightLogistics;
import com.group22.FlightAware.repository.FlightLogisticsRepository;
import com.group22.FlightAware.service.FlightLogisticsService;
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
public class FlightLogisticsServiceImpl implements FlightLogisticsService {

    @Autowired
    private FlightLogisticsRepository flightLogisticRepository;

    @Override
    public Long createFlightLogistics(FlightLogisticsDto flightLogisticDto) {
        return flightLogisticRepository.save(FlightLogistics.builder()
                        .originGate(flightLogisticDto.getOriginGate())
                        .originTerminal(flightLogisticDto.getOriginTerminal())
                        .destinationGate(flightLogisticDto.getDestinationGate())
                        .destinationTerminal(flightLogisticDto.getDestinationTerminal())
                        .build()).getLogisticId();
    }

    @Override
    public List<FlightLogisticsDto> getAllFlightLogistics() {
        return flightLogisticRepository.findAll().stream().map(this::toFlightLogistics).collect(Collectors.toList());
    }

    @Override
    public FlightLogisticsDto getFlightLogisticsById(Long id) {
        Optional<FlightLogistics> flightLogistic=flightLogisticRepository.findById(id);
        return flightLogistic.map(this::toFlightLogistics).orElse(null);
    }

    @Override
    public void updateFlightLogistics(FlightLogisticsDto flightLogistic) {
        if(flightLogisticRepository.existsById(flightLogistic.getLogisticId())){
            flightLogisticRepository.save(toFlightLogisticsDto(flightLogistic));
        }
    }

    @Override
    public void deleteFlightLogisticsById(Long id) {
        if(flightLogisticRepository.existsById(id))
            flightLogisticRepository.deleteById(id);
    }

    private FlightLogisticsDto toFlightLogistics(FlightLogistics flightLogistic){
        return FlightLogisticsDto.builder().logisticId(flightLogistic.getLogisticId())
                .originGate(flightLogistic.getOriginGate())
                .originTerminal(flightLogistic.getOriginTerminal())
                .destinationGate(flightLogistic.getDestinationGate())
                .destinationTerminal(flightLogistic.getDestinationTerminal()).build();
    }

    private FlightLogistics toFlightLogisticsDto(FlightLogisticsDto flightLogistic){
        return FlightLogistics.builder()
                .logisticId(flightLogistic.getLogisticId())
                .originGate(flightLogistic.getOriginGate())
                .originTerminal(flightLogistic.getOriginTerminal())
                .destinationGate(flightLogistic.getDestinationGate())
                .destinationTerminal(flightLogistic.getDestinationTerminal())
                .build();
    }


}
