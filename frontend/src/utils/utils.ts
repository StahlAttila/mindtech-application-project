import CovidData from "../models/covid-data";

export type FormattedCovidData = {
  name: string,
  value: number,
  fill: string
}[]

export function transformCovidData(data:CovidData):FormattedCovidData {
  const formattedData = [
    { name: 'infected', value: data['infected'], fill: '#dbd809' },
    { name: 'quarantined', value: data['quarantined'], fill: '#8884d8' },
    { name: 'deceased', value: data['deceased'], fill: '#f2182e' },
    { name: 'activeInfected', value: data['activeInfected'], fill: '#82ca9d' },
  ]

  return formattedData;
}

export function calcualteElapsedTime(covidData: CovidData | null): string {
  if(!covidData) {
    return "n/a"
  }
  const date = new Date(covidData.id);
  const now = new Date();
  const difference = Math.abs(now.getTime() - date.getTime());
  const diffHours = Math.round(difference / (1000 * 60 * 60))
  
  if(diffHours === 0) {
    return 'less then an hour ago.'
  } else if (diffHours === 1) {
    return '1 hour ago.'
  } else if (diffHours < 24) {
    return `${diffHours} hours ago.`
  } else if (diffHours < 48) {
    return 'yesterday.'
  } else {
    return date.toLocaleDateString();
  }

}