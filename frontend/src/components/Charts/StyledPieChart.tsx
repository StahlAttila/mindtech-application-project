import { PieChart, Pie, Legend, Tooltip } from 'recharts'
import CovidData from '../../models/covid-data'
import { transformCovidData } from '../../utils/utils'

const StyledAreaChart: React.FC<{ data: CovidData }> = (props) => {
  const formattedData = transformCovidData(props.data)
  
  return (
    <PieChart width={730} height={250}>
      <Pie
        data={formattedData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#82ca9d"
        label
      />
      <Legend layout="vertical" verticalAlign="middle" align="right" />
      <Tooltip />
    </PieChart>
  )
}

export default StyledAreaChart
