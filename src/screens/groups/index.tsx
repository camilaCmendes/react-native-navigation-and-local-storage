import { Button, Header, HighLight, ListEmpty } from "@/components";
import { useState } from "react";
import { FlatList } from "react-native";
import { GroupCard } from "./components/groupCard";
import * as S from "./styles";

export const Groups: React.FC = () => {
  const [groups, setGroups] = useState<string[]>(["grupo"]);
  return (
    <S.Container>
      <Header />
      <HighLight title="Turmas" subtitle="Jogue com suas turmas" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => null} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        }
      />
      <Button label="Criar nova turma" />
    </S.Container>
  );
};
