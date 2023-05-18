import styled from 'styled-components';
import { vars } from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const TextField = styled.div`
  label {
    position: absolute;
    left: -100%;
  }

  input {
    border: 1px solid ${vars.color.grey};
    border-radius: ${vars.radius.default};
    padding: ${vars.padding.default};
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 0.5rem;
`;

export const ErrorMessage = styled.p`
  color: ${vars.color.red};
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;
