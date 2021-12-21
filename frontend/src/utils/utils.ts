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

  return new Date(covidData.id).toLocaleString()
}