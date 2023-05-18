import styled from 'styled-components';
import { vars } from '../../styles/variables';

interface IProps {
  disabled: boolean;
}

export const Container = styled.div<IProps>`
  button {
    background-color: ${vars.color.green};
    color: ${vars.color.white};
    padding: ${vars.padding.default};
    border-radius: ${vars.radius.default};

    background-color: ${(props) => props.disabled && `${vars.color.grey}`};
  }
`;
