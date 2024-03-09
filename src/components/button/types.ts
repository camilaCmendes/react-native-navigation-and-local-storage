import { TouchableOpacityProps } from "react-native";

export type Layout = "primary" | "secondary";

export interface LayoutProps {
  layout?: Layout;
  isActive?: boolean;
}

export interface ButtonProps extends LayoutProps, TouchableOpacityProps {
  label: string;
}
