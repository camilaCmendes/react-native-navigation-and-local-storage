import {
  Button,
  ButtonIcon,
  Header,
  HighLight,
  Input,
  ListEmpty,
} from "@/components";
import * as S from "./styles";
import { Filter } from "./components/filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "./components/playerCard";
import { useTranslation } from "react-i18next";

export const Players: React.FC = () => {
  const { t } = useTranslation();
  const [team, setTeam] = useState(t("players_teamA"));
  const [players, setPlayers] = useState(["Camila", "Leonardo"]);
  return (
    <>
      <Header showBackButton />
      <HighLight title={t("players_title")} subtitle={t("players_subtitle")} />
      <S.Form>
        <Input
          placeholder={t("players_inputPlaceholder")}
          autoCorrect={false}
        />
        <ButtonIcon icon={"Plus"} onPress={() => null} color={"green700"} />
      </S.Form>
      <S.HeaderList>
        <FlatList
          data={[t("players_teamA"), t("players_teamB")]}
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

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => null} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message={t("players_emptyListMessage")} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button label={t("players_removeTeamButton")} layout="secondary" />
    </>
  );
};
