import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 50rem;
  margin: auto;
`;

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Chart = styled.div`
  max-width: 40rem;

  & > div:first-child {
    width: 300px;
  }
`;
