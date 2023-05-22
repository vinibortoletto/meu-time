import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoint';
import { vars } from '../../styles/variables';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 3rem;

  button {
    width: 100%;
    height: 100%;
  }

  @media ${breakpoint('700')} {
    max-width: 50rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
    margin: 0 auto 3rem auto;
  }
`;

export const Select = styled.select`
  background-color: transparent;
  padding: ${vars.padding.default};
  border-radius: ${vars.radius.default};

  option {
    background-color: ${vars.color.white};
  }
`;
