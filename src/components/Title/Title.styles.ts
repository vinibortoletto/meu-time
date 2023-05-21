import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoint';
import { vars } from '../../styles/variables';

export const Container = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${vars.color.green};
  margin-bottom: 1rem;

  @media ${breakpoint('800')} {
    font-size: 2rem;
  }
`;
