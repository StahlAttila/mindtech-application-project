import { ChangeEventHandler, Fragment, useContext } from 'react'
import { CovidDataContext } from '../../store/covid-context'
import Form from 'react-bootstrap/Form'
import { Stack } from 'react-bootstrap'

const SelectOption = () => {
  const covidDataCTX = useContext(CovidDataContext)

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    covidDataCTX.changeChartType(event.target.value)
  }

  return (
    <Stack direction='horizontal'>
      <Form.Label style={{minWidth: 170,fontSize: 26}}>Chart Type:</Form.Label>
      <Form.Select size="lg" onChange={handleChange}>
        <option value="area">Area</option>
        <option value="pie">Pie</option>
        <option value="radial-bar">Radial Bar</option>
      </Form.Select>
    </Stack>
  )
}

export default SelectOption
