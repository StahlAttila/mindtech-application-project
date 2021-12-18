package com.mindtechapp.demo.services;

import com.mindtechapp.demo.models.CovidData;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class RestTemplateServiceImpl implements RestTemplateService {

  private static final String DATASET_URL = "https://api.apify.com/v2/datasets/Gm6qjTgGqxkEZTkuJ/items?format=json&clean=1";
  private static final String LAST_DATA_URL = "https://api.apify.com/v2/key-value-stores/RGEUeKe60NjU16Edo/records/LATEST?disableRedirect=true";

  private final RestTemplate restTemplate;

  public RestTemplateServiceImpl(RestTemplateBuilder restTemplateBuilder) {
    this.restTemplate = restTemplateBuilder.build();
  }

  @Override
  public CovidData[] getCovidDataAsObject() {
    return this.restTemplate.getForObject(DATASET_URL, CovidData[].class);
  }

  @Override
  public CovidData getLastCovidDataAsObject() {
    return this.restTemplate.getForObject(LAST_DATA_URL, CovidData.class);
  }
}
