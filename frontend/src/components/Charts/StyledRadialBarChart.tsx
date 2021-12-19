import React from 'react'
import CovidData from '../../models/covid-data'
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts'
import { transformCovidData } from '../../utils/chart-data'

const StyledRadialBarChart:React.FC<{data:CovidData}> = (props) => {
  const formattedData = transformCovidData(props.data);

  return (
    <RadialBarChart
      width={1000}
      height={500}
      innerRadius="10%"
      outerRadius="80%"
      data={formattedData}
      startAngle={180}
      endAngle={0}
      barCategoryGap='5%'
    >
      <RadialBar
        label={{ fill: '#666', position: 'insideStart' }}
        background
        dataKey="value"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="top"
        align="right"
      />
      <Tooltip />
    </RadialBarChart>
  )
}

export default StyledRadialBarChart
