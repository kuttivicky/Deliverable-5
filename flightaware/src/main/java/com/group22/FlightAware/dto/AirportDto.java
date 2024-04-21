package com.group22.FlightAware.dto;

import com.group22.FlightAware.entity.Airport;
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
public class AirportDto {
    private Long airportsId;
    private String name;
    private String city;
    private String country;
    private String iataCode;
}