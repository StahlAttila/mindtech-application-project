package com.mindtechapp.demo.controllers;

import com.mindtechapp.demo.models.CovidData;
import com.mindtechapp.demo.models.dtos.CovidDataDTO;
import com.mindtechapp.demo.services.CovidDataService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

  @CrossOrigin(origins = "*")
  @GetMapping("/covid-data")
  public ResponseEntity<CovidDataDTO[]> getCovidData(
      @RequestParam(required = false) String startingDate,
      @RequestParam(required = false) String endingDate) {
    CovidData[] dataSet;

    try {
      if (startingDate != null || endingDate != null) {
        dataSet = covidDataService.fetchFilteredCovidData(startingDate, endingDate);
      } else {
        dataSet = covidDataService.fetchCovidData();
      }
    } catch (Exception e) {
      return ResponseEntity.internalServerError().build();
    }

    CovidDataDTO[] dataSetDTO = modelMapper.map(dataSet, new TypeToken<CovidDataDTO[]>() {
    }.getType());
    return ResponseEntity.ok(dataSetDTO);
  }

}
