import * as S from "./styles";
import { ListEmptyProps } from "./types";

export const ListEmpty: React.FC<ListEmptyProps> = ({ message }) => {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
};
