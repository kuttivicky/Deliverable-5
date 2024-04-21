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
public class FlightLogistics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long logisticId;

    @OneToOne
    @JoinColumn(name="flight_id")
    private Flight flight;

    @Column
    private String originTerminal;
    @Column
    private int originGate;
    @Column
    private int destinationGate;
    @Column
    private String destinationTerminal;
}
