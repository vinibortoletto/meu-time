import type { ReactNode } from 'react';
import * as S from './Title.styles';

export type Props = {
  children: ReactNode;
};

export default function Title(props: Props) {
  const { children } = props;

  return <S.Container>{children}</S.Container>;
}
