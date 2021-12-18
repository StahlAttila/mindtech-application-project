package com.mindtechapp.demo.repositories;

import com.mindtechapp.demo.models.CovidData;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CovidDataRepository extends JpaRepository<CovidData, OffsetDateTime> {
  @Query(value = "select * from covid_data order by last_updated_at_source desc limit 1",nativeQuery = true)
  CovidData findLastRecord();
}
