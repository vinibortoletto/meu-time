import type { ReactNode } from 'react';
import * as S from './Button.styles';

export type Props = {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
  disabled: boolean;
};

export default function Button(props: Props) {
  const { children, type, disabled } = props;

  return (
    <S.Container disabled={disabled}>
      <button type={type} disabled={disabled}>
        {children}
      </button>
    </S.Container>
  );
}
