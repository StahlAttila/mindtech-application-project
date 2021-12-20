import CovidData from "../models/covid-data";
import DateFilter from "../models/date-filter";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function fetchApiData(dateFilter:DateFilter):Promise<CovidData[]> {
  let url = new URL(`${API_BASE_URL}/covid-data`);

  if(dateFilter != null) {
    if(dateFilter.startingDate != null) {
      url.searchParams.append("startingDate", dateFilter.startingDate)
    }

    if(dateFilter.endingDate != null) {
      url.searchParams.append("endingDate", dateFilter.endingDate)
    }
  }
  console.log(url.toString())
  const response = await fetch(url.toString())
  
  return []
}