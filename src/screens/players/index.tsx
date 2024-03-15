import {
  Button,
  ButtonIcon,
  Header,
  HighLight,
  Input,
  ListEmpty,
} from "@/components";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, FlatList } from "react-native";
import { Filter } from "./components/filter";
import { PlayerCard } from "./components/playerCard";
import * as S from "./styles";
import { AppError } from "@/utils/AppError";
import { playerAddByGroup } from "@/storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@/storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@/storage/player/playerStorageDTO";

type RouteParams = {
  group: string;
};

export const Players: React.FC = () => {
  const { t } = useTranslation();
  const route = useRoute();

  const { group } = route.params as RouteParams;
  const [team, setTeam] = useState(t("players_teamA"));
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");

  const handleAddPlayer = async () => {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        "Nova pessoa",
        "Informe o nome da pessoa para adicionar."
      );
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova pessoa", error.message);
      } else {
        console.log(error);
        Alert.alert("Nova pessoa", "Não foi possível adicionar.");
      }
    }
  };

  const fetchPlayersByTeam = async () => {
    try {
      const players = await playersGetByGroupAndTeam(group, team);
      setPlayers(players);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Pessoas",
        "Não foi possível carregar as pessoas do time selecionado"
      );
    }
  };

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <S.Container>
      <Header showBackButton />
      <HighLight title={group} subtitle={t("players_subtitle")} />
      <S.Form>
        <Input
          onChangeText={setNewPlayerName}
          placeholder={t("players_inputPlaceholder")}
          autoCorrect={false}
        />
        <ButtonIcon
          icon={"Plus"}
          onPress={handleAddPlayer}
          color={"green700"}
        />
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={() => null} />
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
