import React, { useState } from 'react'
import CovidData from '../models/covid-data'


type CovidDataContextObj = {
  dataSet: CovidData[]
  fetchData: (beginingDate: string, endingDate: string) => {}  
  chartType: string
}

export const CovidDataContext = React.createContext<CovidDataContextObj>({
  dataSet: [],
  fetchData: () => {},
  chartType: ""
})

const CovidDataContextProvide: React.FC = (props) => {
  const [dataSet, setDataSet] = useState<CovidData[]>([]);
  const [chartType, setChartType] = useState("");

  const changeChartTypeHandler = (chartType:string) => {
    setChartType(chartType);
  }

  const fetchDataHandler = () => {

  }
}
