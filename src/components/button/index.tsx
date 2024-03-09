import { ButtonProps } from "./types";
import * as S from "./styles";

export const Button: React.FC<ButtonProps> = ({
  label,
  layout = "primary",
  ...rest
}) => {
  return (
    <S.Button {...rest} layout={layout}>
      <S.Text>{label}</S.Text>
    </S.Button>
  );
};
