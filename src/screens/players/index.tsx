import { ButtonIcon, Header, HighLight, Input } from "@/components";
import * as S from "./styles";
import { Filter } from "./components/filter";
import { FlatList } from "react-native";
import { useState } from "react";

export const Players: React.FC = () => {
  const [team, setTeam] = useState("time a");
  const [players, setPlayers] = useState([]);
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
      <S.HeaderList>
        <FlatList
          data={["time a", "time b"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <S.NumbersOfPlayers>{players.length}</S.NumbersOfPlayers>
      </S.HeaderList>
    </>
  );
};
