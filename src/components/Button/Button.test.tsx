import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button | component | unit test', () => {
  it('should render with success', () => {
    render(
      <Button type="submit" disabled={false}>
        Button
      </Button>
    );

    expect(screen.getByText('Button')).toBeInTheDocument();
  });
});
