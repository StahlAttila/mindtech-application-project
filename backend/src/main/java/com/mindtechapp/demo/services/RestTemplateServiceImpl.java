package com.mindtechapp.demo.services;

import com.mindtechapp.demo.models.CovidData;
import com.mindtechapp.demo.models.Post;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class RestTemplateServiceImpl implements RestTemplateService {

  private final RestTemplate restTemplate;

  public RestTemplateServiceImpl(RestTemplateBuilder restTemplateBuilder) {
    this.restTemplate = restTemplateBuilder.build();
  }

  @Override
  public CovidData[] getCovidDataAsObject() {
    String url = "https://api.apify.com/v2/datasets/Gm6qjTgGqxkEZTkuJ/items?format=json&clean=1";
    return this.restTemplate.getForObject(url, CovidData[].class);
  }

  @Override
  public Post[] getPostsAsObject() {
    String url = "https://jsonplaceholder.typicode.com/posts";
    return this.restTemplate.getForObject(url, Post[].class);
  }
}
