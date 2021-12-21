import React, { useRef } from 'react'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/Button'
import SelectOption from '../UI/SelectOption'

const FilterData = () => {
  const startingDateInputRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const endingDateInputRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(startingDateInputRef.current.value)
    console.log(endingDateInputRef.current.value)
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
