import React from 'react'
import dataSet from '../../dummy-data/dummy'
import {
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
  Legend,
  Line,
} from 'recharts'

const Chart = () => {
  const formattedData = dataSet.map((data) => {
    return { ...data, id: new Date(data.id).toLocaleDateString() }
  })

  return (
    <AreaChart
      width={730}
      height={500}
      data={formattedData}
      margin={{ top: 10, right: 30, left: 50, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorTested" x1="0" y1="0" x2="0" y2="1">
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
        tick={{ stroke: 'white' }}
        tickMargin={20}
      />
      <YAxis tick={{ stroke: 'white' }} />
      <CartesianGrid strokeDasharray="2" />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Area
        type="monotone"
        dataKey="tested"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorTested)"
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
  )
}

export default Chart
