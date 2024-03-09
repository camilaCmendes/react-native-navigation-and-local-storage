import { Button, Header, HighLight } from "@/components";
import * as S from "./styles";

export const NewGroup: React.FC = () => {
  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <HighLight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Button label="Criar" />
      </S.Content>
    </S.Container>
  );
};
