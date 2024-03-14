import { Button, Header, HighLight, ListEmpty } from "@/components";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList } from "react-native";
import { GroupCard } from "./components/groupCard";
import * as S from "./styles";

export const Groups: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [groups, setGroups] = useState<string[]>(["grupo"]);

  const handleNewGroup = () => {
    navigation.navigate("new");
  };

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
