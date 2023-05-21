import styled from 'styled-components';
import { vars } from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const Logo = styled.img`
  width: 4rem;
`;

export const Title = styled.h1`
  font-family: 'Damion', cursive;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${vars.color.green};
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

export const Loading = styled.img`
  width: 7rem;
`;
