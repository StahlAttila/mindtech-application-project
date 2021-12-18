package com.mindtechapp.demo.services;

import com.mindtechapp.demo.models.CovidData;

public interface RestTemplateService {

  CovidData[] getCovidDataAsObject();

  CovidData getLastCovidDataAsObject();

}
