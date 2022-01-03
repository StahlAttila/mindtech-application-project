import React, { useState } from 'react'
import CovidData from '../models/covid-data'
import DateFilter from '../models/date-filter'

type CovidDataContextObj = {
  changeChartType: (chartType: string) => void
  chartType: string
  dateFilter: DateFilter
  changeStartingDate: (startingDate: string | null) => void
  changeEndingDate: (ending: string | null) => void
  updateLastData: (covidData: CovidData) => void
  lastCovidData: CovidData | null
}

export const CovidDataContext = React.createContext<CovidDataContextObj>({
  changeChartType: () => {},
  chartType: '',
  dateFilter: null,
  changeStartingDate: () => {},
  changeEndingDate: () => {},
  updateLastData: () => {},
  lastCovidData: null
})

const CovidDataContextProvider: React.FC = (props) => {
  const [chartType, setChartType] = useState('area')
  const [lastData, setLastData] = useState<CovidData | null>(null);
  const [dateFilter, setDateFilter] = useState<DateFilter>({startingDate: null, endingDate: null})

  const changeChartTypeHandler = (chartType: string) => {
    setChartType(chartType)
  }

  const changeStartingDateFilter = (startingDate: string | null) => {
    setDateFilter((prev:DateFilter) => {
      return {startingDate: startingDate, endingDate: prev!.endingDate}
    })
  }

  const changeEndingDateFilter = (endingDate: string | null) => {
    setDateFilter((prev:DateFilter) => {
      return {startingDate: prev!.startingDate, endingDate: endingDate}
    })
  }

  const updateLastDataHandler = (covidData: CovidData) => {
    if(!lastData) {
      setLastData(covidData);
      return;
    }

    const prevDate = new Date(lastData.id);
    const newDate = new Date(covidData.id);

    if(prevDate.getTime() < newDate.getTime()) {
      setLastData(covidData);
    }
  }

  const contextValue: CovidDataContextObj = {
    chartType,
    changeChartType: changeChartTypeHandler,
    dateFilter,
    changeEndingDate: changeEndingDateFilter,
    changeStartingDate: changeStartingDateFilter,
    updateLastData: updateLastDataHandler,
    lastCovidData: lastData
  }

  return (
    <CovidDataContext.Provider value={contextValue}>
      {props.children}
    </CovidDataContext.Provider>
  )
}

export default CovidDataContextProvider
