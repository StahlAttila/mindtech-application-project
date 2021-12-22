import React from 'react'
import CovidData from '../../models/covid-data'
import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { transformCovidData } from '../../utils/utils'
import useWindowDimensions from '../../hooks/use-window-dimensions'

const StyledRadialBarChart: React.FC<{ data: CovidData }> = (props) => {
  const formattedData = transformCovidData(props.data)
  const { width } = useWindowDimensions();

  const renderFormattedLegend = (value: string) => {
    let text = value

    if (value === 'activeInfected') {
      text = 'active infected'
    }

    return <span>{text}</span>
  }

  const renderFormattedTooltip = (value: string, name: string) => {
    let text = name

    if (text === 'activeInfected') {
      text = 'active infected'
    }

    return [value, text]
  }

  let CustomLegend;

  if (width >= 576) {
    CustomLegend = (
      <Legend
        layout="vertical"
        verticalAlign="middle"
        align="right"
        formatter={renderFormattedLegend}
      />
    )
  } else {
    CustomLegend = (
      <Legend
        layout="horizontal"
        verticalAlign="top"
        align="center"
        formatter={renderFormattedLegend}
      />
    )
  }

  return (
    <ResponsiveContainer width="100%" height={500}>
      <RadialBarChart
        innerRadius="10%"
        outerRadius="80%"
        data={formattedData}
        startAngle={180}
        endAngle={0}
        barCategoryGap="5%"
        margin={{ top: 50, right: 0, left: 0, bottom: 0 }}
      >
        <RadialBar
          label={{ fill: '#666', position: 'insideStart' }}
          background
          dataKey="value"
        />
        {CustomLegend}
        <Tooltip formatter={renderFormattedTooltip} />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

export default StyledRadialBarChart
