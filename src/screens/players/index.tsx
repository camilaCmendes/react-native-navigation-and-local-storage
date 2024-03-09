import { ButtonIcon, Header, HighLight, Input } from "@/components";
import * as S from "./styles";

export const Players: React.FC = () => {
  return (
    <>
      <Header showBackButton />
      <HighLight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <S.Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="Plus" onPress={() => null} color={"green700"} />
      </S.Form>
    </>
  );
};
