import { render, screen } from '@testing-library/react'
import ChartSelector from './ChartSelector'

test('renders loading Spinner', () => {
  render(<ChartSelector chartType='pie' status='pending' data={undefined}/>)

  const textElement = screen.getByText('Loading...')
  expect(textElement).toBeInTheDocument();
})

test('renders No Data to display Alert', () => {
  render(<ChartSelector chartType='pie' status='completed' data={undefined}/>)

  const textElement = screen.getByText('No data to display!')
  expect(textElement).toBeInTheDocument();
})
