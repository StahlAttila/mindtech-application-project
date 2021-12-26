package com.mindtechapp.demo.models.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.OffsetDateTime;

public class CovidDataDTO {

  @JsonProperty("id")
  private OffsetDateTime lastUpdatedAtSource;
  private int infected;
  private int activeInfected;
  private int deceased;
  private int quarantined;

  public OffsetDateTime getLastUpdatedAtSource() {
    return lastUpdatedAtSource;
  }

  public void setLastUpdatedAtSource(OffsetDateTime lastUpdatedAtSource) {
    this.lastUpdatedAtSource = lastUpdatedAtSource;
  }

  public int getInfected() {
    return infected;
  }

  public void setInfected(int infected) {
    this.infected = infected;
  }

  public int getActiveInfected() {
    return activeInfected;
  }

  public void setActiveInfected(int activeInfected) {
    this.activeInfected = activeInfected;
  }

  public int getDeceased() {
    return deceased;
  }

  public void setDeceased(int deceased) {
    this.deceased = deceased;
  }

  public int getQuarantined() {
    return quarantined;
  }

  public void setQuarantined(int quarantined) {
    this.quarantined = quarantined;
  }
}
