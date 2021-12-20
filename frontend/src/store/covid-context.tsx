import React, { useState } from 'react'
import CovidData from '../models/covid-data'

type CovidDataContextObj = {
  dataSet: CovidData[]
  fetchData: (beginingDate: string, endingDate: string) => void
  changeChartType: (chartType: string) => void
  chartType: string
}

export const CovidDataContext = React.createContext<CovidDataContextObj>({
  dataSet: [],
  fetchData: () => {},
  changeChartType: () => {},
  chartType: '',
})

const CovidDataContextProvider: React.FC = (props) => {
  const [dataSet, setDataSet] = useState<CovidData[]>([])
  const [chartType, setChartType] = useState('pie')

  const changeChartTypeHandler = (chartType: string) => {
    setChartType(chartType)
  }

  const fetchDataHandler = (beginingDate: string, endingDate: string) => {
    console.log('fetching data...', beginingDate, endingDate)
  }

  const contextValue: CovidDataContextObj = {
    dataSet,
    chartType,
    fetchData: fetchDataHandler,
    changeChartType: changeChartTypeHandler,
  }

  return (
    <CovidDataContext.Provider value={contextValue}>
      {props.children}
    </CovidDataContext.Provider>
  )
}

export default CovidDataContextProvider
