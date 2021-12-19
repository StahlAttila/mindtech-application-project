import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material';

const SelectOption = () => {
  const [chartType, setChartType] = useState("pie");

  const handleChange = (event:SelectChangeEvent<string>) => {
    event.preventDefault();
    setChartType(event.target.value);
  }

  console.log(chartType);

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
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="pie">Pie</MenuItem>
        <MenuItem value="area">Area</MenuItem>
        <MenuItem value="radiant-bar">Radiant Bar</MenuItem>
      </Select>
      </div>
  )
}

export default SelectOption
