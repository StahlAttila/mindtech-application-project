package com.mindtechapp.demo.services;

import com.mindtechapp.demo.models.CovidData;
import com.mindtechapp.demo.repositories.CovidDataRepository;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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
    boolean isFresh = isDataBaseUpToDate();

    if (isFresh) {
      return covidDataRepository.findAll().toArray(new CovidData[0]);
    } else {
      return refreshDataBase();
    }
  }

  @Override
  public CovidData[] fetchFilteredCovidData(String staringDate, String endingDate)
      throws Exception {
    LocalDate startingLocalDate = convertStringToLocalDate(staringDate, true);
    LocalDate endingLocalDate = convertStringToLocalDate(endingDate, false);

    CovidData[] dataSet = fetchCovidData();

    return Arrays.stream(dataSet).filter(data -> {
      LocalDate dataIssuedDate = data.getLastUpdatedAtSource().toLocalDate();
      boolean isBeforeOrEqual =
          endingLocalDate.isAfter(dataIssuedDate) || endingLocalDate.isEqual(dataIssuedDate);
      boolean isAfterOrEqual =
          startingLocalDate.isBefore(dataIssuedDate) || startingLocalDate.isEqual(dataIssuedDate);
      return isBeforeOrEqual && isAfterOrEqual;
    }).toArray(CovidData[]::new);
  }

  private CovidData[] refreshDataBase() {
    CovidData[] dataFromApi = restTemplateService.getCovidDataAsObject();
    Arrays.stream(dataFromApi).forEach(covidData -> {
      if (covidData.getLastUpdatedAtSource() == null) {
        covidData.setLastUpdatedAtSource(covidData.getLastUpdatedAtApify());
      }
      covidDataRepository.save(covidData);
    });

    return dataFromApi;
  }

  private LocalDate convertStringToLocalDate(String date, boolean isStarting) {
    if ((date == null || date.isEmpty()) && isStarting) {
      return LocalDate.MIN;
    } else if (date == null || date.isEmpty()) {
      return LocalDate.MAX;
    }
    //TODO: exception handling
    return LocalDate.parse(date, DateTimeFormatter.ISO_LOCAL_DATE);
  }

  private boolean isDataBaseUpToDate() throws Exception {
    CovidData lastAPIRecord = restTemplateService.getLastCovidDataAsObject();
    CovidData lastDBRecord = covidDataRepository.findLastRecord();

    if (lastAPIRecord == null) {
      throw new Exception("No data arrived from server.");
    }

    if (lastDBRecord == null) {
      return false;
    }

    long lastFromAPIAsSeconds = lastAPIRecord.getLastUpdatedAtSource().toEpochSecond();
    long lastFromDBAsSeconds = lastDBRecord.getLastUpdatedAtSource().toEpochSecond();

    return lastFromAPIAsSeconds == lastFromDBAsSeconds;
  }
}
