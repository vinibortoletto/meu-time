import styled from 'styled-components';
import { vars } from '../../styles/variables';

export const Header = styled.header`
  max-width: 60rem;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 1rem 0;
`;

export const Title = styled.h1`
  font-family: 'Damion', cursive;
  color: ${vars.color.green};
  font-size: 2rem;
`;

export const Logo = styled.img`
  width: 3rem;
`;

export const Button = styled.button`
  color: ${vars.color.green};

  &:hover {
    text-decoration: underline;
  }
`;
