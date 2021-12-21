import React, { useContext, useEffect, useState } from 'react'
import { Divider, CircularProgress, Stack, Grid } from '@mui/material'
import FilterData from '../components/FilterData/FilterData'
import StyledAreaChart from '../components/Charts/StyledAreaChart'
import StyledPieChart from '../components/Charts/StyledPieChart'
import StyledRadialBarChart from '../components/Charts/StyledRadialBarChart'
import { CovidDataContext } from '../store/covid-context'
import { fetchApiData } from '../lib/api'
import useHttp from '../hooks/use-http'

const MainPage: React.FC = () => {
  const { chartType } = useContext(CovidDataContext);
  const {sendRequest, status, data} = useHttp(fetchApiData);
  
  useEffect(() => {
    sendRequest(null)
  },[sendRequest]);

  let ChartContent;

  if(status === 'completed' && data != null) {
    if(chartType === 'area') {
      ChartContent = <StyledAreaChart dataSet={data}/>
    } else if (chartType === 'pie') {
      ChartContent = <StyledPieChart data={data[data.length - 1]} />
    } else if(chartType === 'radial-bar') {
      ChartContent = <StyledRadialBarChart data={data[data.length - 1]} />
    }
  }

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Stack
        direction="row"
        divider={
          <Divider
            orientation="vertical"
            flexItem
            style={{ background: 'white' }}
          />
        }
        spacing={4}
      >
        <FilterData />
        
        {status === 'pending' && <CircularProgress size={100} color="primary" />}
        {ChartContent}
      </Stack>
    </Grid>
  )
}

export default MainPage
