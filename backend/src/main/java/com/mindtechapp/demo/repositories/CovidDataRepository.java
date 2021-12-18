package com.mindtechapp.demo.repositories;

import com.mindtechapp.demo.models.CovidData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CovidDataRepository extends JpaRepository<CovidData, String> {

}
