import { Button, Header, HighLight, Input } from "@/components";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./styles";
import { groupCreate } from "@/storage/group/groupCreate";
import { AppError } from "@/utils/AppError";
import { Alert } from "react-native";

export const NewGroup: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [group, setGroup] = useState("");

  const handleNew = async () => {
    try {
      if (group.trim().length === 0) {
        return Alert.alert(
          t("newGroup_alert_title_newGroup"),
          t("newGroup_alert_description_emptyInput")
        );
      }

      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert(t("newGroup_alert_title_newGroup"), t(error.message));
      } else {
        Alert.alert(
          t("newGroup_alert_title_newGroup"),
          t("newGroup_alert_description_errorCreateNewGroup")
        );
        console.log(error);
      }
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
