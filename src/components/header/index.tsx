import { Logo } from "@/assets";
import * as S from "./styles";
import { HeaderProps } from "./type";

export const Header: React.FC<HeaderProps> = ({ showBackButton }) => {
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      )}
      <Logo />
    </S.Container>
  );
};
