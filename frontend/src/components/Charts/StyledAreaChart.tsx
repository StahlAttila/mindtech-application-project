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
} from 'recharts'
import CovidData from '../../models/covid-data'

const StyledAreaChart:React.FC<{dataSet: CovidData[]}> = (props) => {
  
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
      margin={{ top: 50, right: 0, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorActiveInfected" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorInfected" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#dbd809" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#dbd809" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorQuarantined" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorDeceased" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#f2182e" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#f2182e" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis
        dataKey="id"
        height={150}
        angle={-25}
        tickMargin={20}
      />
      <YAxis mirror={true}/>
      <CartesianGrid strokeDasharray="2" />
      <Tooltip formatter={renderFormattedTooltip}/>
      <Legend verticalAlign="top" formatter={renderFormattedLegend}/>
      <Area
        type="monotone"
        dataKey="activeInfected"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorActiveInfected)"
      />
      <Area
        type="monotone"
        dataKey="infected"
        stroke="#dbd809"
        fillOpacity={1}
        fill="url(#colorInfected)"
      />
      <Area
        type="monotone"
        dataKey="quarantined"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorQuarantined)"
      />
      <Area
        type="monotone"
        dataKey="deceased"
        stroke="#f2182e"
        fillOpacity={1}
        fill="url(#colorDeceased)"
      />
    </AreaChart>
    </ResponsiveContainer>
  )
}

export default StyledAreaChart
