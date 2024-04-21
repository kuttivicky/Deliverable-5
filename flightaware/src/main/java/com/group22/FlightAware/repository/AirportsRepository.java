package com.group22.FlightAware.repository;

import com.group22.FlightAware.entity.Airport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AirportsRepository extends JpaRepository<Airport,Long> {
}
