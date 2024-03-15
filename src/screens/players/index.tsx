import {
  Button,
  ButtonIcon,
  Header,
  HighLight,
  Input,
  ListEmpty,
  Loading,
} from "@/components";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Alert, FlatList, TextInput } from "react-native";
import { Filter } from "./components/filter";
import { PlayerCard } from "./components/playerCard";
import * as S from "./styles";
import { AppError } from "@/utils/AppError";
import { playerAddByGroup } from "@/storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@/storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@/storage/player/playerStorageDTO";
import { playerRemoveByGroup } from "@/storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@/storage/group/groupRemoveByName";
import { useNavigation } from "@react-navigation/native";

type RouteParams = {
  group: string;
};

export const Players: React.FC = () => {
  const { t } = useTranslation();
  const route = useRoute();
  const newPlayerNameInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(true);
  const { group } = route.params as RouteParams;
  const [team, setTeam] = useState(t("players_teamA"));
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");

  const handleAddPlayer = async () => {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        t("players_alertMessage_addPlayer_title"),
        t("players_alertMessage_addPlayer_description")
      );
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();
      setNewPlayerName("");

      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert(
          t("players_alertMessage_addPlayer_title"),
          t(error.message)
        );
      } else {
        console.log(error);
        Alert.alert(
          t("players_alertMessage_addPlayer_title"),
          t("players_alertMessage_addPlayer_description_error")
        );
      }
    }
  };

  const fetchPlayersByTeam = async () => {
    try {
      setIsLoading(true);
      const players = await playersGetByGroupAndTeam(group, team);
      setPlayers(players);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      Alert.alert(
        t("players_alertMessage_playersByTeam_title"),
        t("players_alertMessage_playersByTeam_description")
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlayerRemove = async (playerName: string) => {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert(
        t("players_alertMessage_playerRemove_title"),
        t("players_alertMessage_playerRemove_description")
      );
    }
  };

  const handleGroupRemove = () => {
    Alert.alert(
      t("players_alertMessage_groupRemove_title"),
      t("players_alertMessage_groupRemove_description"),
      [
        { text: t("players_alertMessage_groupRemove_no"), style: "cancel" },
        {
          text: t("players_alertMessage_groupRemove_yes"),
          onPress: () => groupRemove(),
        },
      ]
    );
  };

  const groupRemove = async () => {
    try {
      await groupRemoveByName(group);
      navigation.navigate("groups");
    } catch (error) {
      console.log(error);
      Alert.alert("Remover grupo", "Não foi possível remover o grupo.");
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
          inputRef={newPlayerNameInputRef}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          placeholder={t("players_inputPlaceholder")}
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
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
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => handlePlayerRemove(item.name)}
            />
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
      )}
      <Button
        label={t("players_removeTeamButton")}
        layout="secondary"
        onPress={() => handleGroupRemove()}
      />
    </S.Container>
  );
};
