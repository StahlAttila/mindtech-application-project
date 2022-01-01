import { render, screen } from '@testing-library/react'
import Header from './Header'

test('renders Hungarian COVID statistics', () => {
  render(<Header />)

  const textElement = screen.getByText('Hungarian COVID Statistics');
  expect(textElement).toBeInTheDocument()
})

