import { ButtonIcon } from "@/components";
import * as S from "./styles";
import { PlayersCardProps } from "./types";

export const PlayerCard: React.FC<PlayersCardProps> = ({ name, onRemove }) => {
  return (
    <S.Container>
      <S.Icon />

      <S.Name>{name}</S.Name>
      <ButtonIcon color="red" icon="Close" onPress={onRemove} />
    </S.Container>
  );
};
