package com.group22.FlightAware.repository;

import com.group22.FlightAware.entity.Airline;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AirlinesRepository extends JpaRepository<Airline,Long> {
}
