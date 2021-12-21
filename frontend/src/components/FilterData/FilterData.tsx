import React, { useContext, useRef } from 'react'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/Button'
import SelectOption from '../UI/SelectOption'
import { CovidDataContext } from '../../store/covid-context'

const FilterData = () => {
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

  return (
    <div>
      <SelectOption />
      <Form onSubmit={handleSubmit}>
        <Form.Control type="date" name="from" ref={startingDateInputRef}/>
        <Form.Control type="date" name="to" ref={endingDateInputRef}/>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default FilterData
