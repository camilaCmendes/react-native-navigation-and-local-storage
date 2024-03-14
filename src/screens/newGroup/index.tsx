import { Button, Header, HighLight, Input } from "@/components";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

export const NewGroup: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [group, setGroup] = useState("");

  const handlePlayers = () => {
    navigation.navigate("players", { group });
  };

  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <HighLight
          title={t("newGroup_title")}
          subtitle={t("newGroup_subtitle")}
        />
        <Input
          placeholder={t("newGroup_inputPlaceholder")}
          onChangeText={setGroup}
        />
        <Button
          label={t("newGroup_buttonLabel")}
          onPress={handlePlayers}
          style={{ marginTop: 20 }}
        />
      </S.Content>
    </S.Container>
  );
};
