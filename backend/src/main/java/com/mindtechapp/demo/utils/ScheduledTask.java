package com.mindtechapp.demo.utils;

import com.mindtechapp.demo.services.CovidDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@EnableScheduling
public class ScheduledTask {

  private final CovidDataService covidDataService;

  @Autowired
  public ScheduledTask(CovidDataService covidDataService) {
    this.covidDataService = covidDataService;
  }

  @Scheduled(cron = "${cron.expression}")
  public void refreshDatabase() throws Exception {
    covidDataService.refreshDataBase();
  }
}
