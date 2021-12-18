package com.mindtechapp.demo.services;

import com.mindtechapp.demo.models.CovidData;
import com.mindtechapp.demo.models.Post;

public interface CovidDataService {
  CovidData[] fetchCovidData() throws Exception;

}
