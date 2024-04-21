package com.group22.FlightAware.repository;
import com.group22.FlightAware.entity.Aircraft;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AircraftRepository extends JpaRepository<Aircraft,Long> {
    List<Aircraft> findAllByTypeIn(List<String> type);
}
