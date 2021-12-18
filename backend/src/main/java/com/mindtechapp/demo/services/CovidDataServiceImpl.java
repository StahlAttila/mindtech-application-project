package com.mindtechapp.demo.services;

import com.mindtechapp.demo.repositories.CovidDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CovidDataServiceImpl implements CovidDataService {

  private final CovidDataRepository covidDataRepository;

  @Autowired
  public CovidDataServiceImpl(
      CovidDataRepository covidDataRepository) {
    this.covidDataRepository = covidDataRepository;
  }
}
