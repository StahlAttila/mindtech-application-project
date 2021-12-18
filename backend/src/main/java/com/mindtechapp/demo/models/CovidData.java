package com.mindtechapp.demo.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CovidData {

  @Id
  private String lastUpdatedAtApify;

  private int infected;
  private int activeInfected;
  private int deceased;
  private int quarantined;
  private int tested;
  private String sourceUrl;
  private String lastUpdatedAtSource;
  private String readMe;

  public String getLastUpdatedAtApify() {
    return lastUpdatedAtApify;
  }

  public void setLastUpdatedAtApify(String lastUpdatedAtApify) {
    this.lastUpdatedAtApify = lastUpdatedAtApify;
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

  public int getTested() {
    return tested;
  }

  public void setTested(int tested) {
    this.tested = tested;
  }

  public String getSourceUrl() {
    return sourceUrl;
  }

  public void setSourceUrl(String sourceUrl) {
    this.sourceUrl = sourceUrl;
  }

  public String getLastUpdatedAtSource() {
    return lastUpdatedAtSource;
  }

  public void setLastUpdatedAtSource(String lastUpdatedAtSource) {
    this.lastUpdatedAtSource = lastUpdatedAtSource;
  }

  public String getReadMe() {
    return readMe;
  }

  public void setReadMe(String readMe) {
    this.readMe = readMe;
  }
}
