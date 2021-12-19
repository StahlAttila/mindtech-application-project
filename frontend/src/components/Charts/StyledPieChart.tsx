import React from 'react'
import { PieChart, Pie } from 'recharts'
import data from '../../dummy-data/dummy'
import CovidData from '../../models/covid-data'

const StyledAreaChart = () => {

  let lastData:CovidData[] = [];
  
  lastData.push(data[data.length - 1]);

  return (
    <PieChart width={730} height={250}>
      <Pie
        data={lastData}
        dataKey="tested"
        nameKey="Tested"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#82ca9d"
        label
      />
      <Pie
        data={lastData}
        dataKey="infected"
        nameKey="Infected"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#dbd809"
      />
      <Pie
        data={lastData}
        dataKey="quarantined"
        nameKey="Quarantined"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
      />
      <Pie
        data={lastData}
        dataKey="deceased"
        nameKey="Deceased"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#f2182e"
      />

    </PieChart>
  )
}

export default StyledAreaChart
