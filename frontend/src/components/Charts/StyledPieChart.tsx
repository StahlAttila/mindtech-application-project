import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts'
import useWindowDimensions from '../../hooks/use-window-dimensions'
import CovidData from '../../models/covid-data'
import { transformCovidData } from '../../utils/utils'

const StyledPieChart: React.FC<{ data: CovidData }> = (props) => {
  const { width } = useWindowDimensions()

  const formattedData = transformCovidData(props.data)

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

  let CustomLegend

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
      <PieChart margin={{ top: 30, left: 0, right: 0, bottom: width > 576 ? 70 : 120} }>
        <Pie
          data={formattedData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={width > 576 ? 150 : 110}
          fill="#82ca9d"
          label
        />
        {CustomLegend}
        <Tooltip formatter={renderFormattedTooltip} />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default StyledPieChart
