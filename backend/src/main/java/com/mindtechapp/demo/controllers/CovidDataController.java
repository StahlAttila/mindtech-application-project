package com.mindtechapp.demo.controllers;

import com.mindtechapp.demo.models.CovidData;
import com.mindtechapp.demo.models.dtos.CovidDataDTO;
import com.mindtechapp.demo.services.CovidDataService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CovidDataController {

  private final CovidDataService covidDataService;
  private final ModelMapper modelMapper;

  @Autowired
  public CovidDataController(CovidDataService covidDataService) {
    this.covidDataService = covidDataService;
    modelMapper = new ModelMapper();
  }

  @GetMapping("/covid-data")
  public ResponseEntity<CovidDataDTO[]> getCovidData() {
    CovidData[] dataSet;
    try {
      dataSet = covidDataService.fetchCovidData();
      CovidDataDTO[] dataSetDTO = modelMapper.map(dataSet, new TypeToken<CovidDataDTO[]>() {
      }.getType());
      return ResponseEntity.ok(dataSetDTO);
    } catch (Exception e) {
      return ResponseEntity.internalServerError().build();
    }
  }

}
