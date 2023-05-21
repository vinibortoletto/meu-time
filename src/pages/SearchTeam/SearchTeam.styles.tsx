import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoint';
import { vars } from '../../styles/variables';

export const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  margin-bottom: 3rem;

  button {
    width: 100%;
    height: 100%;
  }

  @media ${breakpoint('700')} {
    flex-direction: row;
    justify-content: center;
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
