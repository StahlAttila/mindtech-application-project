package com.mindtechapp.unit;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import com.mindtechapp.demo.models.CovidData;
import com.mindtechapp.demo.repositories.CovidDataRepository;
import com.mindtechapp.demo.services.CovidDataService;
import com.mindtechapp.demo.services.CovidDataServiceImpl;
import com.mindtechapp.demo.services.RestTemplateService;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.util.Arrays;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class CovidDataServiceTest {

  private CovidDataRepository covidDataRepository;
  private RestTemplateService restTemplateService;
  private CovidDataService covidDataService;

  @BeforeEach
  public void setup() {
    covidDataRepository = Mockito.mock(CovidDataRepository.class);
    restTemplateService = Mockito.mock(RestTemplateService.class);
    covidDataService = new CovidDataServiceImpl(covidDataRepository, restTemplateService);
  }

  @Test
  public void fetchCovidDataOK() throws Exception {
    List<CovidData> fetchedData = Arrays.asList(
        new CovidData(),
        new CovidData(),
        new CovidData()
    );

    CovidData lastData = new CovidData();
    lastData.setLastUpdatedAtSource(OffsetDateTime.now());

    Mockito.when(covidDataRepository.findAll()).thenReturn(fetchedData);
    Mockito.when(covidDataRepository.findLastRecord()).thenReturn(lastData);
    Mockito.when(restTemplateService.getLastCovidDataAsObject()).thenReturn(lastData);

    CovidData[] result = covidDataService.fetchCovidData();

    assertEquals(fetchedData.size(), result.length);
  }

  @Test
  public void fetchCovidDataExceptionThrown() {
    Mockito.when(restTemplateService.getLastCovidDataAsObject()).thenReturn(null);

    assertThrows(Exception.class, () -> covidDataService.fetchCovidData());
  }

  @Test
  public void filterCovidDataWithBothFilter() throws Exception {
    CovidData firstData = new CovidData();
    firstData.setLastUpdatedAtSource(OffsetDateTime.of(2020, 1, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    CovidData secondData = new CovidData();
    secondData.setLastUpdatedAtSource(OffsetDateTime.of(2021, 5, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    CovidData thirdData = new CovidData();
    thirdData.setLastUpdatedAtSource(OffsetDateTime.of(2022, 12, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    List<CovidData> fetchedData = Arrays.asList(firstData, secondData, thirdData);

    Mockito.when(covidDataRepository.findAll()).thenReturn(fetchedData);
    Mockito.when(covidDataRepository.findLastRecord()).thenReturn(thirdData);
    Mockito.when(restTemplateService.getLastCovidDataAsObject()).thenReturn(thirdData);

    String startingDate = "2020-05-10";
    String endingDate = "2022-01-10";

    CovidData[] result = covidDataService.fetchFilteredCovidData(startingDate, endingDate);

    assertEquals(1, result.length);
    assertEquals(result[0].getLastUpdatedAtSource(), secondData.getLastUpdatedAtSource());
  }

  @Test
  public void filterCovidDataWithOnlyStartingDateFilter() throws Exception {
    CovidData firstData = new CovidData();
    firstData.setLastUpdatedAtSource(OffsetDateTime.of(2020, 1, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    CovidData secondData = new CovidData();
    secondData.setLastUpdatedAtSource(OffsetDateTime.of(2021, 5, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    CovidData thirdData = new CovidData();
    thirdData.setLastUpdatedAtSource(OffsetDateTime.of(2022, 12, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    List<CovidData> fetchedData = Arrays.asList(firstData, secondData, thirdData);

    Mockito.when(covidDataRepository.findAll()).thenReturn(fetchedData);
    Mockito.when(covidDataRepository.findLastRecord()).thenReturn(thirdData);
    Mockito.when(restTemplateService.getLastCovidDataAsObject()).thenReturn(thirdData);

    String startingDate = "2020-05-10";

    CovidData[] result = covidDataService.fetchFilteredCovidData(startingDate, null);

    assertEquals(2, result.length);
    assertEquals(result[0].getLastUpdatedAtSource(), secondData.getLastUpdatedAtSource());
    assertEquals(result[1].getLastUpdatedAtSource(), thirdData.getLastUpdatedAtSource());
  }

  @Test
  public void filterCovidDataWithOnlyEndingDateFilter() throws Exception {
    CovidData firstData = new CovidData();
    firstData.setLastUpdatedAtSource(OffsetDateTime.of(2020, 1, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    CovidData secondData = new CovidData();
    secondData.setLastUpdatedAtSource(OffsetDateTime.of(2021, 5, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    CovidData thirdData = new CovidData();
    thirdData.setLastUpdatedAtSource(OffsetDateTime.of(2022, 12, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    List<CovidData> fetchedData = Arrays.asList(firstData, secondData, thirdData);

    Mockito.when(covidDataRepository.findAll()).thenReturn(fetchedData);
    Mockito.when(covidDataRepository.findLastRecord()).thenReturn(thirdData);
    Mockito.when(restTemplateService.getLastCovidDataAsObject()).thenReturn(thirdData);

    String endingDate = "2020-05-10";

    CovidData[] result = covidDataService.fetchFilteredCovidData(null, endingDate);

    assertEquals(1, result.length);
    assertEquals(result[0].getLastUpdatedAtSource(), firstData.getLastUpdatedAtSource());
  }

  @Test
  public void filterCovidDataResultEmptyArray() throws Exception {
    CovidData firstData = new CovidData();
    firstData.setLastUpdatedAtSource(OffsetDateTime.of(2020, 1, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    CovidData secondData = new CovidData();
    secondData.setLastUpdatedAtSource(OffsetDateTime.of(2021, 5, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    CovidData thirdData = new CovidData();
    thirdData.setLastUpdatedAtSource(OffsetDateTime.of(2022, 12, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    List<CovidData> fetchedData = Arrays.asList(firstData, secondData, thirdData);

    Mockito.when(covidDataRepository.findAll()).thenReturn(fetchedData);
    Mockito.when(covidDataRepository.findLastRecord()).thenReturn(thirdData);
    Mockito.when(restTemplateService.getLastCovidDataAsObject()).thenReturn(thirdData);

    String startingDate = "2050-05-10";
    String endingDate = "2100-01-01";

    CovidData[] result = covidDataService.fetchFilteredCovidData(startingDate, endingDate);

    assertEquals(0, result.length);
  }

  @Test
  public void filterCovidDataWithNullFilters() throws Exception {
    CovidData firstData = new CovidData();
    firstData.setLastUpdatedAtSource(OffsetDateTime.of(2020, 1, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    CovidData secondData = new CovidData();
    secondData.setLastUpdatedAtSource(OffsetDateTime.of(2021, 5, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    CovidData thirdData = new CovidData();
    thirdData.setLastUpdatedAtSource(OffsetDateTime.of(2022, 12, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    List<CovidData> fetchedData = Arrays.asList(firstData, secondData, thirdData);

    Mockito.when(covidDataRepository.findAll()).thenReturn(fetchedData);
    Mockito.when(covidDataRepository.findLastRecord()).thenReturn(thirdData);
    Mockito.when(restTemplateService.getLastCovidDataAsObject()).thenReturn(thirdData);

    CovidData[] result = covidDataService.fetchFilteredCovidData(null, null);

    assertEquals(3, result.length);
  }

  @Test
  public void refreshDatabaseOutdated() throws Exception {
    CovidData lastFromAPI = new CovidData();
    lastFromAPI.setLastUpdatedAtSource(OffsetDateTime.of(2022, 12, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    CovidData lastFromDB = new CovidData();
    lastFromDB.setLastUpdatedAtSource(OffsetDateTime.of(2021, 12, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    CovidData firstData = new CovidData();
    firstData.setLastUpdatedAtSource(OffsetDateTime.of(2020, 1, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    CovidData secondData = new CovidData();
    secondData.setLastUpdatedAtSource(OffsetDateTime.of(2021, 5, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    CovidData thirdData = new CovidData();
    thirdData.setLastUpdatedAtSource(OffsetDateTime.of(2022, 12, 1, 1, 1, 1, 1, ZoneOffset.UTC));

    List<CovidData> fetchedData = Arrays.asList(firstData, secondData, thirdData);

    Mockito.when(restTemplateService.getLastCovidDataAsObject()).thenReturn(lastFromAPI);
    Mockito.when(covidDataRepository.findLastRecord()).thenReturn(lastFromDB);
    Mockito.when(restTemplateService.getCovidDataAsObject())
        .thenReturn(fetchedData.toArray(new CovidData[0]));

    covidDataService.refreshDataBase();
  }

}
