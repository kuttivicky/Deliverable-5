package com.group22.FlightAware.entity;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Builder
public class Flight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long flightId;

    @ManyToOne
    @JoinColumn(name="airline_id",nullable = false)
    private Airline airline;

    @OneToMany(mappedBy = "flight")
    private List<FlightPath> flightPaths;

    @Column
    private int originAirportID;
    @Column
    private int destinationAirportID;
    @Column
    private String departureTime;
    @Column
    private String arrivalTime;
    @Column
    private String status;


}

