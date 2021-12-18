package com.mindtechapp.demo.services;

import com.mindtechapp.demo.models.CovidData;
import com.mindtechapp.demo.repositories.CovidDataRepository;
import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CovidDataServiceImpl implements CovidDataService {

  private final CovidDataRepository covidDataRepository;
  private final RestTemplateService restTemplateService;

  @Autowired
  public CovidDataServiceImpl(
      CovidDataRepository covidDataRepository,
      RestTemplateService restTemplateService) {
    this.covidDataRepository = covidDataRepository;
    this.restTemplateService = restTemplateService;
  }

  @Override
  public CovidData[] fetchCovidData() throws Exception {
    CovidData lastAPIRecord = restTemplateService.getLastCovidDataAsObject();
    CovidData lastDBRecord = covidDataRepository.findLastRecord();

    boolean isFresh = isLastDBDataFresh(lastAPIRecord,
        lastDBRecord);

    if (isFresh) {
      return covidDataRepository.findAll().toArray(new CovidData[0]);
    } else {
      CovidData[] dataFromApi = restTemplateService.getCovidDataAsObject();
      //TODO: make it more optimal by only saving the difference between
      Arrays.stream(dataFromApi).forEach(covidData -> {
        if (covidData.getLastUpdatedAtSource() == null) {
          covidData.setLastUpdatedAtSource(covidData.getLastUpdatedAtApify());
        }
        covidDataRepository.save(covidData);
      });

      return dataFromApi;
    }
  }

  private boolean isLastDBDataFresh(CovidData lastFromApi, CovidData lastFromDB) throws Exception {
    if (lastFromApi == null) {
      throw new Exception("No data arrived from server.");
    }

    if(lastFromDB == null) {
      return false;
    }

    long lastFromAPIAsSeconds = lastFromApi.getLastUpdatedAtSource().toEpochSecond();
    long lastFromDBAsSeconds = lastFromDB.getLastUpdatedAtSource().toEpochSecond();

    return lastFromAPIAsSeconds == lastFromDBAsSeconds;
  }
}
