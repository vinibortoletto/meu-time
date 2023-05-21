import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header | component | unit test', () => {
  it('should render with success', () => {
    render(<Header>Header</Header>)

    expect(screen.getByText('Header')).toBeInTheDocument()
  })
})
