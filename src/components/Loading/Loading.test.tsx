import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading | component | unit test', () => {
  it('should render with success', () => {
    render(<Loading />);
    expect(
      screen.getByAltText('desenho de um jogador fazer embaixadinha')
    ).toBeInTheDocument();
  });
});
