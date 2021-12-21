import CovidData from "../models/covid-data";
import DateFilter from "../models/date-filter";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function fetchApiData(dateFilter:DateFilter):Promise<CovidData[]> {
  let url = new URL(`${API_BASE_URL}/api/covid-data`);

  if(dateFilter != null) {
    if(dateFilter.startingDate != null) {
      url.searchParams.append("startingDate", dateFilter.startingDate)
    }

    if(dateFilter.endingDate != null) {
      url.searchParams.append("endingDate", dateFilter.endingDate)
    }
  }

  const response = await fetch(url.toString())

  if(response.status !== 200) {
    throw new Error("Could not get data from API.")
  }
  
  return response.json()
}