import styled from 'styled-components';
import { vars } from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Image = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  border: 3px solid ${vars.color.green};
`;

export const Name = styled.p`
  /* font-size: 1.3rem; */
  font-weight: bold;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
