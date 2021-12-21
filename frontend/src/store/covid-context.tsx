import React, { useState } from 'react'
import DateFilter from '../models/date-filter'

type CovidDataContextObj = {
  changeChartType: (chartType: string) => void
  chartType: string
  dateFilter: DateFilter
  changeStartingDate: (startingDate: string | null) => void
  changeEndingDate: (ending: string | null) => void
}

export const CovidDataContext = React.createContext<CovidDataContextObj>({
  changeChartType: () => {},
  chartType: '',
  dateFilter: null,
  changeStartingDate: () => {},
  changeEndingDate: () => {}
})

const CovidDataContextProvider: React.FC = (props) => {
  const [chartType, setChartType] = useState('pie')
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

  const contextValue: CovidDataContextObj = {
    chartType,
    changeChartType: changeChartTypeHandler,
    dateFilter,
    changeEndingDate: changeEndingDateFilter,
    changeStartingDate: changeStartingDateFilter
  }

  return (
    <CovidDataContext.Provider value={contextValue}>
      {props.children}
    </CovidDataContext.Provider>
  )
}

export default CovidDataContextProvider
