package com.group22.FlightAware.repository;
import com.group22.FlightAware.entity.FlightLogistics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlightLogisticsRepository extends JpaRepository<FlightLogistics,Long> {
}
