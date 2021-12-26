import React, { useContext, useRef } from 'react'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/Button'
import SelectOption from '../UI/SelectOption'
import { CovidDataContext } from '../../store/covid-context'
import Alert from 'react-bootstrap/Alert'
import { calcualteElapsedTime } from '../../utils/utils'
import CovidData from '../../models/covid-data'
import Stack from 'react-bootstrap/Stack'

const FilterData: React.FC<{loadingState: string | null; lastData: CovidData | null }> = (props) => {
  const startingDateInputRef = useRef() as React.MutableRefObject<
    HTMLInputElement
  >
  const endingDateInputRef = useRef() as React.MutableRefObject<
    HTMLInputElement
  >
  const covidDataCTX = useContext(CovidDataContext)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const pickedStartingDate = startingDateInputRef.current.value
    const pickedEndingDate = endingDateInputRef.current.value

    if (pickedStartingDate && pickedStartingDate !== '') {
      covidDataCTX.changeStartingDate(pickedStartingDate)
    } else {
      covidDataCTX.changeStartingDate(null)
    }

    if (pickedEndingDate && pickedEndingDate !== '') {
      covidDataCTX.changeEndingDate(pickedEndingDate)
    } else {
      covidDataCTX.changeEndingDate(null)
    }
  }

  let ChartInfo

  if (
    covidDataCTX.chartType === 'pie' ||
    covidDataCTX.chartType === 'radial-bar'
  ) {
    ChartInfo = (
      <Alert variant="info">
        This type of chart is only considering the last data from the selected
        date range.
      </Alert>
    )
  }

  const elapsedTime = calcualteElapsedTime(props.lastData)

  return (
    <Stack gap={1}>
      <Stack gap={2}>
        <SelectOption />
        {ChartInfo}
      </Stack>
      <Stack gap={3}>
        <Form onSubmit={handleSubmit}>
          <Stack >
            <Stack direction="horizontal">
              <Form.Label style={{ minWidth: 170, fontSize: 26 }}>
                Starting Date:
              </Form.Label>
              <Form.Control
                type="date"
                name="from"
                ref={startingDateInputRef}
              />
            </Stack>
            <Stack direction="horizontal">
              <Form.Label style={{ minWidth: 170, fontSize: 26 }}>
                Ending Date:
              </Form.Label>
              <Form.Control type="date" name="to" ref={endingDateInputRef} />
            </Stack>
            <Button className='mt-2' disabled={props.loadingState === 'pending'} variant='success' type="submit" >{props.loadingState === 'pending' ? 'Loading...' : 'Update'}</Button>
          </Stack>
        </Form>
        <span style={{fontSize: 20}}>Database last updated at: {elapsedTime}</span>
      </Stack>
    </Stack>
  )
}

export default FilterData
