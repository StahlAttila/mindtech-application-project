import React from 'react'
import CovidData from '../../models/covid-data'
import StyledAreaChart from './StyledAreaChart'
import StyledPieChart from './StyledPieChart'
import StyledRadialBarChart from './StyledRadialBarChart'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'

const ChartSelector: React.FC<{
  chartType: string
  status: string
  data: CovidData[] | undefined
}> = (props) => {
  const { status, data, chartType } = props

  let ChartContent

  if (status === 'completed' && data != null && data.length > 0) {
    if (chartType === 'area') {
      ChartContent = <StyledAreaChart dataSet={data} />
    } else if (chartType === 'pie') {
      ChartContent = <StyledPieChart data={data[data.length - 1]} />
    } else if (chartType === 'radial-bar') {
      ChartContent = <StyledRadialBarChart data={data[data.length - 1]} />
    }
  } else if (status === 'completed') {
    ChartContent = <Alert variant="warning">No data to display!</Alert>
  } else {
    ChartContent = (
      <div className="d-flex justify-content-center mt-5">
        <Spinner
          animation="border"
          variant="success"
          role="status"
          style={{ width: '8rem', height: '8rem' }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  return <React.Fragment>{ChartContent}</React.Fragment>
}

export default ChartSelector
