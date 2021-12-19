import { Divider, CircularProgress, Stack, Grid } from '@mui/material'
import FilterData from '../components/FilterData/FilterData'
import StyledAreaChart from '../components/Charts/StyledAreaChart'
import StyledPieChart from '../components/Charts/StyledPieChart'

const MainPage:React.FC = () => {
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
        {/* <CircularProgress size={100} color="primary" /> */}
        {/* <StyledAreaChart /> */}
        <StyledPieChart />
      </Stack>
    </Grid>
  )
}

export default MainPage
