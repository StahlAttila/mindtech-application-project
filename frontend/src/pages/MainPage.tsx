import { Divider, CircularProgress, Stack, Grid } from '@mui/material'
import FilterData from '../components/FilterData/FilterData'
import Chart from '../components/Charts/AreaChart'

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
        <Chart />
      </Stack>
    </Grid>
  )
}

export default MainPage
