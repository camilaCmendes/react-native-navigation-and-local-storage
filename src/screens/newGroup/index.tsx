import { Button, Header, HighLight, Input } from "@/components";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./styles";
import { groupCreate } from "@/storage/group/groupCreate";

export const NewGroup: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [group, setGroup] = useState("");

  const handleNew = async () => {
    try {
      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      console.log(error);
    }
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
          onPress={handleNew}
          style={{ marginTop: 20 }}
        />
      </S.Content>
    </S.Container>
  );
};
