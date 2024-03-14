import { Button, Header, HighLight, ListEmpty } from "@/components";
import { groupsGetAll } from "@/storage/group/groupsGetAll";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList } from "react-native";
import { GroupCard } from "./components/groupCard";
import * as S from "./styles";

export const Groups: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [groups, setGroups] = useState<string[]>([]);

  const handleNewGroup = () => {
    navigation.navigate("new");
  };

  const fetchGroups = async () => {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <S.Container>
      <Header />
      <HighLight title={t("groups_title")} subtitle={t("groups_subtitle")} />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => null} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message={t("groups_emptyListMessage")} />
        }
      />
      <Button label={t("groups_newClassButton")} onPress={handleNewGroup} />
    </S.Container>
  );
};
