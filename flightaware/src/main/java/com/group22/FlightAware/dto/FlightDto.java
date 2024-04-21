package com.group22.FlightAware.dto;

import com.group22.FlightAware.entity.Aircraft;
import com.group22.FlightAware.entity.Airline;
import com.group22.FlightAware.entity.Flight;
import jakarta.persistence.Column;
import jakarta.persistence.OneToMany;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FlightDto {
    private Long flightsId;
    private Long airline;
    private int originAirportID;
    private int destinationAirportID;
    private String departureTime;
    private String arrivalTime;
    private String status;
}
