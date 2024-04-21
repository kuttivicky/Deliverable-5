package com.group22.FlightAware.dto;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AircraftAgrDto {
    private Long numberOfAirCraft;
    private Long airlineId;
}
