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
  const { sendRequest, status, data, error } = useHttp(fetchApiData)

  useEffect(() => {
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
      <div className="d-flex justify-content-center mt-5">
        <Spinner
          animation="border"
          variant="success"
          role="status"
          style={{width: '8rem', height: '8rem'}}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  return (
    <Container className="mt-5">
      <Row className="align-items-center justify-content-center">
        <Col lg={5} md={12}>
          <FilterData
            loadingState={status}
            lastData={data ? data[data.length - 1] : null}
          />
          {error && (
            <Alert className="mt-2" variant="danger">
              {error}
            </Alert>
          )}
        </Col>
        <Col lg={7} md={12}>
          {ChartContent}
        </Col>
      </Row>
    </Container>
  )
}

export default MainPage
