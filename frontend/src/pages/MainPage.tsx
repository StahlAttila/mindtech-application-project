import React, { useState } from 'react'
import { Divider, CircularProgress, Stack, Grid } from '@mui/material'
import FilterData from '../components/FilterData/FilterData'
import StyledAreaChart from '../components/Charts/StyledAreaChart'
import StyledPieChart from '../components/Charts/StyledPieChart'
import StyledRadialBarChart from '../components/Charts/StyledRadialBarChart'
import data from '../dummy-data/dummy'
import SelectOption from '../components/UI/SelectOption'

const MainPage: React.FC = () => {
  const [chartType, setChartType] = useState("");

  console.log(chartType)

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
        {/* <FilterData /> */}
        <SelectOption />
        {/* <CircularProgress size={100} color="primary" /> */}
        {/* <StyledAreaChart dataSet={data}/> */}
        <StyledPieChart data={data[data.length - 1]} />
        {/* <StyledRadialBarChart data={data[data.length - 1]} /> */}
      </Stack>
    </Grid>
  )
}

export default MainPage
