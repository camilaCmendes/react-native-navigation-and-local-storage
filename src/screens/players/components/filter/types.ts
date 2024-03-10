import { TouchableOpacityProps } from "react-native";

export type FilterStyleProps = {
  isActive?: boolean;
};

export type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };
