import React, { useContext, useEffect } from 'react'
import FilterData from '../components/FilterData/FilterData'
import { CovidDataContext } from '../store/covid-context'
import { fetchApiData } from '../lib/api'
import useHttp from '../hooks/use-http'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import ChartSelector from '../components/Charts/ChartSelector'

const MainPage: React.FC = () => {
  const { chartType, dateFilter, updateLastData } = useContext(CovidDataContext)
  const { sendRequest, status, data, error } = useHttp(fetchApiData)

  useEffect(() => {

    sendRequest(dateFilter)

  }, [sendRequest, dateFilter])

  useEffect(() => {
    
    if(data && data?.length > 0) {
      updateLastData(data[data.length - 1])
    }

  }, [data, updateLastData])

  return (
    <Container className="mt-5">
      <Row className="align-items-center justify-content-center">
        <Col lg={5} md={12}>
          <FilterData
            loadingState={status}
          />
          {error && (
            <Alert className="mt-2" variant="danger">
              {error}
            </Alert>
          )}
        </Col>
        <Col lg={7} md={12} className='text-dark'>
          <ChartSelector chartType={chartType} status={status} data={data}/>
        </Col>
      </Row>
    </Container>
  )
}

export default MainPage
