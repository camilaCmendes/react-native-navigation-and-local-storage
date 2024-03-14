import { Logo } from "@/assets";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import { HeaderProps } from "./type";

export const Header: React.FC<HeaderProps> = ({ showBackButton }) => {
  const navigation = useNavigation();

  const handleGoBackHome = () => {
    navigation.navigate("groups");
  };

  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={handleGoBackHome}>
          <S.BackIcon />
        </S.BackButton>
      )}
      <Logo />
    </S.Container>
  );
};
