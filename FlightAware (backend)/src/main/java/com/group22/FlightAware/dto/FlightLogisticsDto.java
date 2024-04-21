package com.group22.FlightAware.dto;

import com.group22.FlightAware.entity.Aircraft;
import com.group22.FlightAware.entity.Airline;
import com.group22.FlightAware.entity.FlightLogistics;
import jakarta.persistence.Column;
import jakarta.persistence.OneToMany;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FlightLogisticsDto {
    private Long logisticId;
    private String originTerminal;
    private String destinationTerminal;
    private int originGate;
    private int destinationGate;
}
