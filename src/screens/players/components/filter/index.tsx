import * as S from "./styles";
import { FilterProps } from "./types";

export const Filter: React.FC<FilterProps> = ({
  title,
  isActive = false,
  ...rest
}) => {
  return (
    <S.Container {...rest} isActive={isActive}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
