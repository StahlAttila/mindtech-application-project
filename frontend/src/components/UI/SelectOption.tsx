import { ChangeEventHandler, useContext } from 'react'
import { CovidDataContext } from '../../store/covid-context'
import Form from 'react-bootstrap/Form'

const SelectOption = () => {
  const covidDataCTX = useContext(CovidDataContext)

  const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    covidDataCTX.changeChartType(event.target.value)
  }

  return (
    <Form.Select size="lg" onChange={handleChange}>
      <option value="pie">Pie</option>
      <option value="area">Area</option>
      <option value="radial-bar">Radial Bar</option>
    </Form.Select>
  )
}

export default SelectOption
