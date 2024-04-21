package com.group22.FlightAware.entity;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Builder
public class FlightPath {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long flightPathId;

    @ManyToOne
    @JoinColumn(name="flight_id",nullable = false)//,nullable = false
    private Flight flight;

    @Column
    private String recordedTime;
    @Column
    private int latitude;
    @Column
    private int longitude;
    @Column
    private int altitude;
    @Column
    private int speed;
}


