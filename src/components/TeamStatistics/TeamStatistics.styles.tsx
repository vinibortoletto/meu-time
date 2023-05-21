import styled from 'styled-components';
import { vars } from '../../styles/variables';

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

export const Table = styled.div`
  overflow-x: auto;
  border: 1px solid ${vars.color.grey};

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  thead {
    font-weight: bold;
    background-color: ${vars.color.grey};
    text-align: left;
  }

  th,
  td {
    padding: ${vars.padding.default};
    border: 1px solid ${vars.color.grey};
  }
`;
