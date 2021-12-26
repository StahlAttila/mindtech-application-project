import React from 'react'
import {
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Label,
} from 'recharts'
import useWindowDimensions from '../../hooks/use-window-dimensions'
import CovidData from '../../models/covid-data'

const StyledAreaChart:React.FC<{dataSet: CovidData[]}> = (props) => {
  const { width } = useWindowDimensions();

  const formattedData = props.dataSet.map((data) => {
    return { ...data, id: new Date(data.id).toLocaleDateString() }
  })

  const renderFormattedLegend = (value: string) => {
    let text = value;

    if(value === 'activeInfected') {
      text = 'active infected'
    }

    return <span>{text}</span>;
  };

  const renderFormattedTooltip = (value: string, name: string) => {
    let text = name;

    if(text === 'activeInfected') {
      text = 'active infected'
    }

    return [value, text]
  }
  
  return (
    <ResponsiveContainer width="100%" height={500}>
    <AreaChart
      data={formattedData}
      margin={{ top: 50, right: 10, left: 10, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorActiveInfected" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#49be25" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#49be25" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorInfected" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#2596be" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#2596be" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorQuarantined" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#9925be" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#9925be" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorDeceased" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#be4d25" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#be4d25" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis
        dataKey="id"
        height={150}
        angle={-25}
        tickMargin={20}
      />
      <YAxis mirror={width < 768} tickSize={10} />
      <CartesianGrid strokeDasharray="2" horizontal={width > 768} vertical={width > 768}/>
      <Tooltip formatter={renderFormattedTooltip} />
      <Legend verticalAlign="top" formatter={renderFormattedLegend} />
      <Area
        type="monotone"
        dataKey="activeInfected"
        stroke="#49be25"
        fillOpacity={1}
        fill="url(#colorActiveInfected)"
      />
      <Area
        type="monotone"
        dataKey="infected"
        stroke="#2596be"
        fillOpacity={1}
        fill="url(#colorInfected)"
      />
      <Area
        type="monotone"
        dataKey="quarantined"
        stroke="#9925be"
        fillOpacity={1}
        fill="url(#colorQuarantined)"
      />
      <Area
        type="monotone"
        dataKey="deceased"
        stroke="#be4d25"
        fillOpacity={1}
        fill="url(#colorDeceased)"
      />
    </AreaChart>
    </ResponsiveContainer>
  )
}

export default StyledAreaChart
