import { Button, Header, HighLight, Input } from "@/components";
import * as S from "./styles";
import { useTranslation } from "react-i18next";

export const NewGroup: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <HighLight
          title={t("newGroup_title")}
          subtitle={t("newGroup_subtitle")}
        />
        <Input placeholder={t("newGroup_inputPlaceholder")} />
        <Button label={t("newGroup_buttonLabel")} style={{ marginTop: 20 }} />
      </S.Content>
    </S.Container>
  );
};
