package com.group22.FlightAware.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
@Entity
public class Airline {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long airlinesId;

    @OneToMany(mappedBy = "airline")
    private List<Flight> flights;

    @OneToMany(mappedBy = "airline")
    private List<Aircraft> aircrafts;

    @Column
    private String name;
    @Column
    private String country;
}

