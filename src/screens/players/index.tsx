import {
  Button,
  ButtonIcon,
  Header,
  HighLight,
  Input,
  ListEmpty,
} from "@/components";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList } from "react-native";
import { Filter } from "./components/filter";
import { PlayerCard } from "./components/playerCard";
import * as S from "./styles";

type RouteParams = {
  group: string;
};

export const Players: React.FC = () => {
  const { t } = useTranslation();
  const route = useRoute();

  const { group } = route.params as RouteParams;
  const [team, setTeam] = useState(t("players_teamA"));
  const [players, setPlayers] = useState(["Camila", "Leonardo"]);

  return (
    <S.Container>
      <Header showBackButton />
      <HighLight title={group} subtitle={t("players_subtitle")} />
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
    </S.Container>
  );
};
