import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";
import * as Icon from "../../assets";
import { ColorInterface } from "@/themes/theme.interface";
import { useTheme } from "styled-components/native";

interface ButtoIconProps extends TouchableOpacityProps {
  icon: keyof typeof Icon;
  color: keyof ColorInterface;
}
export const ButtonIcon: React.FC<ButtoIconProps> = ({
  icon,
  color,
  ...rest
}) => {
  const theme = useTheme();
  const IconComponent = Icon[icon];
  return (
    <S.Container {...rest}>
      <IconComponent width={24} height={24} color={theme.colors[color]} />
    </S.Container>
  );
};
