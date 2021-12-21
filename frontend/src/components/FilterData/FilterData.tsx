import React, { useContext, useRef } from 'react'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/Button'
import SelectOption from '../UI/SelectOption'
import { CovidDataContext } from '../../store/covid-context'
import Alert from 'react-bootstrap/Alert'
import { calcualteElapsedTime } from '../../utils/utils'
import CovidData from '../../models/covid-data'

const FilterData:React.FC<{lastData: CovidData | null}> = (props) => {
  const startingDateInputRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const endingDateInputRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const covidDataCTX = useContext(CovidDataContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const pickedStartingDate = startingDateInputRef.current.value;
    const pickedEndingDate = endingDateInputRef.current.value;

    if(pickedStartingDate && pickedStartingDate !== '') {
      covidDataCTX.changeStartingDate(pickedStartingDate);
    } else {
      covidDataCTX.changeStartingDate(null);
    }

    if(pickedEndingDate && pickedEndingDate !== '') {
      covidDataCTX.changeEndingDate(pickedEndingDate)
    }else {
      covidDataCTX.changeEndingDate(null);
    }

  }

  let ChartInfo;

  if(covidDataCTX.chartType === 'pie' || covidDataCTX.chartType === 'radial-bar') {
    ChartInfo = <Alert variant='info'>This type of chart is only considering the last data from the selected date range.</Alert>
  }

  const elapsedTime = calcualteElapsedTime(props.lastData)

  return (
    <div>
      <SelectOption />
      {ChartInfo}
      <Form onSubmit={handleSubmit}>
        <Form.Control type="date" name="from" ref={startingDateInputRef}/>
        <Form.Control type="date" name="to" ref={endingDateInputRef}/>
        <Button type='submit'>Submit</Button>
      </Form>
      <span>Database last updated at: {elapsedTime}</span>
    </div>
  )
}

export default FilterData
