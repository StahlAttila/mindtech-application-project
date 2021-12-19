import { PieChart, Pie, Legend, Tooltip } from 'recharts'
import data from '../../dummy-data/dummy'
import { FormattedCovidData, transformCovidData } from '../../utils/chart-data'

const StyledAreaChart = () => {

  const lastData = data[data.length - 1]

  const formattedData: FormattedCovidData = transformCovidData(lastData);

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
      <Legend layout='vertical' verticalAlign='middle' align='right'/>
      <Tooltip />
    </PieChart>
  )
}

export default StyledAreaChart
