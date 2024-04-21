package com.group22.FlightAware.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Builder
public class Airport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long airportId;

    @OneToMany(mappedBy = "airports")
    private List<Weather> weathers;

    @Column
    private String name;

    @Column
    private String country;

    @Column
    private String city;

    @Column
    private String iataCode;

}
