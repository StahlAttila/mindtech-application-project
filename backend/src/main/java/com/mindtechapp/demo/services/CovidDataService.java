package com.mindtechapp.demo.services;

import com.mindtechapp.demo.models.CovidData;

public interface CovidDataService {
  CovidData[] fetchCovidData() throws Exception;

}
