package com.group22.FlightAware.entity;
import jakarta.persistence.*;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Builder
public class Weather {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long weatherId;

    @ManyToOne
    @JoinColumn(name="airport_id",nullable = false)//,nullable = false
    private Airport airports;

    @Column
    private String timeStamp;
    @Column
    private int windSpeed;
    @Column
    private int visibility;
    @Column
    private String windDirection;
}
