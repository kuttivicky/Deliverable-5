package com.group22.FlightAware.repository;
import com.group22.FlightAware.entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlightsRepository extends JpaRepository<Flight,Long> {
    List<Flight> findByStatus(String status);
}
