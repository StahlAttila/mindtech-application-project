import React, { useContext, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material';
import {CovidDataContext} from '../../store/covid-context'

const SelectOption = () => {
  const [chartType, setChartType] = useState("pie");
  const covidDataCTX = useContext(CovidDataContext);

  const handleChange = (event:SelectChangeEvent<string>) => {
    event.preventDefault();
    setChartType(event.target.value);
    covidDataCTX.changeChartType(event.target.value)
  }

  return (
    <div>
      <InputLabel id="chart-type">Chart Type</InputLabel>
      <Select
        labelId="chart-type"
        id="chart-type"
        value={chartType}
        onChange={handleChange}
        autoWidth
        label="Chart Type"
      >
        <MenuItem value="pie">Pie</MenuItem>
        <MenuItem value="area">Area</MenuItem>
        <MenuItem value="radial-bar">Radiant Bar</MenuItem>
      </Select>
      </div>
  )
}

export default SelectOption
