import { ButtonProps } from "./types";
import * as S from "./styles";

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  layout = "primary",
}) => {
  return (
    <S.Button onPress={onPress} layout={layout}>
      <S.Text>{label}</S.Text>
    </S.Button>
  );
};
