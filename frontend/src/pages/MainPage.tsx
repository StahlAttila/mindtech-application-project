import React, { useContext, useEffect, useState } from 'react'
import { Divider, CircularProgress, Stack, Grid } from '@mui/material'
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

const MainPage: React.FC = () => {
  const { chartType, dateFilter } = useContext(CovidDataContext)
  const { sendRequest, status, data } = useHttp(fetchApiData)

  useEffect(() => {
    sendRequest(dateFilter)
  }, [sendRequest, dateFilter])

  let ChartContent

  if (status === 'completed' && data != null) {
    if (chartType === 'area') {
      ChartContent = <StyledAreaChart dataSet={data} />
    } else if (chartType === 'pie') {
      ChartContent = <StyledPieChart data={data[data.length - 1]} />
    } else if (chartType === 'radial-bar') {
      ChartContent = <StyledRadialBarChart data={data[data.length - 1]} />
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <FilterData />
        </Col>
        <Col>
          {status === 'pending' && 
            <Spinner animation="border" variant="info" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          }
          {ChartContent}
        </Col>
      </Row>
      
    </Container>
  )
}

export default MainPage
