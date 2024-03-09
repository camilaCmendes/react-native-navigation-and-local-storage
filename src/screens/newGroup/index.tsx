import { Button, Header, HighLight, Input } from "@/components";
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
        <Input placeholder="Nome da turma" />
        <Button label="Criar" style={{ marginTop: 20 }} />
      </S.Content>
    </S.Container>
  );
};
