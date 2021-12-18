package com.mindtechapp.demo.controllers;

import com.mindtechapp.demo.models.CovidData;
import com.mindtechapp.demo.models.Post;
import com.mindtechapp.demo.services.CovidDataService;
import com.mindtechapp.demo.services.RestTemplateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CovidDataController {

  private final CovidDataService covidDataService;

  @Autowired
  public CovidDataController(CovidDataService covidDataService) {
    this.covidDataService = covidDataService;
  }

  @GetMapping("/covid-data")
  public CovidData[] getCovidData() throws Exception {
    CovidData[] covidData = covidDataService.fetchCovidData();
    return covidData;
  }

}
