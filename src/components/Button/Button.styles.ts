import styled from 'styled-components';
import { vars } from '../../styles/variables';

export const Container = styled.div`
  button {
    background-color: ${vars.color.green};
    color: ${vars.color.white};
    padding: ${vars.padding.default};
    border-radius: ${vars.radius.default};
  }
`;
