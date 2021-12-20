import React, { useContext, useState } from 'react'
import { Divider, CircularProgress, Stack, Grid } from '@mui/material'
import FilterData from '../components/FilterData/FilterData'
import StyledAreaChart from '../components/Charts/StyledAreaChart'
import StyledPieChart from '../components/Charts/StyledPieChart'
import StyledRadialBarChart from '../components/Charts/StyledRadialBarChart'
import data from '../dummy-data/dummy'
import { CovidDataContext } from '../store/covid-context'

const MainPage: React.FC = () => {
  const { chartType } = useContext(CovidDataContext);
  const [isLoading, setIsLoading] = useState(false);
  
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
        
        {isLoading && <CircularProgress size={100} color="primary" />}
        {chartType === 'area' && <StyledAreaChart dataSet={data}/>}
        {chartType === 'pie' &&<StyledPieChart data={data[data.length - 1]} />}
        {chartType === 'radial-bar' &&<StyledRadialBarChart data={data[data.length - 1]} />}
      </Stack>
    </Grid>
  )
}

export default MainPage
