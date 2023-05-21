import loadingGif from '../../assets/loading.webp';
import * as S from './Loading.styles';

export default function Loading() {
  return (
    <S.Container>
      <img src={loadingGif} alt="desenho de um jogador fazer embaixadinha" />
    </S.Container>
  );
}
