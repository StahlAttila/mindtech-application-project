# Spring Boot Project - Mindtech job application

This is a Spring Boot (2.6.1) / Gradle application that can be used to retrieve and save
COVID related statistics from the following api to a database: https://api.apify.com/v2/datasets/Gm6qjTgGqxkEZTkuJ/items?format=json&clean=1 

The application has one endpoint that returns all the available COVID data.  

It is also possible to provide a starting and ending date to get a filtered result.
Providing a CRON expression, it is possible to check for new data automatically.

## How to Run

This application is packaged as a war which has Tomcat embedded. No Tomcat or JBoss installation is necessary.

* Clone this repository
* Make sure you are using JDK 11 and Gradle 7.3.1
* Set up the environment variables  
* You can build the project and run the tests with gradlew `bootrun` or `test` command

## Environment Variables
* SERVER_PORT = **any port number** (e.g. 8080)
* DB_URL = **jdbc url of a MySQL server** (e.g. jdbc:mysql://localhost:3306/mindtech - for local server)
* DB_USER = **database username**
* DB_PW = **database password**
* HIBERNATE_DIALECT = **the dialect for the required DB** (e.g. org.hibernate.dialect.MySQL8Dialect)
* DB_REFRESH_SCHEDULE = **spring cron expression for scheduling automated DB refresh task** (e.g. 0 */10 8-12 * * MON-FRI - every 10 minutes between 8am and 12pm every weekday)

**note: the project only has MySQL database driver dependency**

## Endpoints

### Retrieve COVID data
```
GET /api/covid-data

Parameters:

(optional) startingDate: string (yyyy-MM-dd) e.g. 2020-07-12
(optional) endingDate: string (yyyy-MM-dd) e.g. 2021-12-10

Example response:

[
    {
        infected: 998488,
        activeInfected: 128124,
        deceased: 32780,
        quarantined: 59177,
        id: "2021-11-19T09:59:00+01:00"
    },
    {
        infected: 1025697,
        activeInfected: 144533,
        deceased: 33172,
        quarantined: 50429,
        id: "2021-11-22T09:53:00+01:00"
    }
]

RESPONSE: HTTP 200 (OK)
RESPONSE: HHTP 500 (INTERNAL SERVER ERROR)
```
