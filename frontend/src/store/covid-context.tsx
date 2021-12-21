import React, { useState } from 'react'
import CovidData from '../models/covid-data'

type CovidDataContextObj = {
  dataSet: CovidData[]
  updateDataSet: (dataSet: CovidData[]) => void
  changeChartType: (chartType: string) => void
  chartType: string
}

export const CovidDataContext = React.createContext<CovidDataContextObj>({
  dataSet: [],
  updateDataSet: () => {},
  changeChartType: () => {},
  chartType: ''
})

const CovidDataContextProvider: React.FC = (props) => {
  const [dataSet, setDataSet] = useState<CovidData[]>([])
  const [chartType, setChartType] = useState('pie')

  const changeChartTypeHandler = (chartType: string) => {
    setChartType(chartType)
  }

  const updateDataSetHandler = (dataSet: CovidData[]) => {
    setDataSet(dataSet)
  }

  const contextValue: CovidDataContextObj = {
    dataSet,
    chartType,
    updateDataSet: updateDataSetHandler,
    changeChartType: changeChartTypeHandler
  }

  return (
    <CovidDataContext.Provider value={contextValue}>
      {props.children}
    </CovidDataContext.Provider>
  )
}

export default CovidDataContextProvider
