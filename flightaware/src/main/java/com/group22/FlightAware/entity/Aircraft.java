package com.group22.FlightAware.entity;
import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Builder
public class Aircraft {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long aircraftId;

    @ManyToOne
    @JoinColumn(name="airline_id",nullable = false)//,nullable = false
    private Airline airline;

    @Column
    private String type;
}


