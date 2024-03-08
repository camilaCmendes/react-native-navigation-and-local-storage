import * as S from "./styles";
import { HighLightProps } from "./types";

export const HighLight: React.FC<HighLightProps> = ({ title, subtitle }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.Container>
  );
};
