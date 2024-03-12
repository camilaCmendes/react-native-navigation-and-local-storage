import { Button, Header, HighLight, ListEmpty } from "@/components";
import { useState } from "react";
import { FlatList } from "react-native";
import { GroupCard } from "./components/groupCard";
import * as S from "./styles";
import { useTranslation } from "react-i18next";

export const Groups: React.FC = () => {
  const [groups, setGroups] = useState<string[]>(["grupo"]);
  const { t } = useTranslation();

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
      <Button label={t("groups_newClassButton")} />
    </S.Container>
  );
};
