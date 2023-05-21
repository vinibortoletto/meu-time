import { render, screen } from '@testing-library/react'
import Loading from './Loading'

describe('Loading | component | unit test', () => {
  it('should render with success', () => {
    render(<Loading>Loading</Loading>)

    expect(screen.getByText('Loading')).toBeInTheDocument()
  })
})
