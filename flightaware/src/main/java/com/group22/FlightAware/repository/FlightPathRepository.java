package com.group22.FlightAware.repository;
import com.group22.FlightAware.entity.FlightPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlightPathRepository extends JpaRepository<FlightPath,Long> {
}
