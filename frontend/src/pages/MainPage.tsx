import React, { useContext, useEffect } from 'react'
import FilterData from '../components/FilterData/FilterData'
import StyledAreaChart from '../components/Charts/StyledAreaChart'
import StyledPieChart from '../components/Charts/StyledPieChart'
import StyledRadialBarChart from '../components/Charts/StyledRadialBarChart'
import { CovidDataContext } from '../store/covid-context'
import { fetchApiData } from '../lib/api'
import useHttp from '../hooks/use-http'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'

const MainPage: React.FC = () => {
  const { chartType, dateFilter } = useContext(CovidDataContext)
  const { sendRequest, status, data } = useHttp(fetchApiData)

  useEffect(() => {
    console.log(dateFilter)
    sendRequest(dateFilter)
  }, [sendRequest, dateFilter])

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
      <Spinner animation="border" variant="info" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }

  return (
    <Container>
      <Row>
        <Col>
          <FilterData />
        </Col>
        <Col>
          {ChartContent}
        </Col>
      </Row>
    </Container>
  )
}

export default MainPage
