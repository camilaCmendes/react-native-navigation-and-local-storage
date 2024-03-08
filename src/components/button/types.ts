export type Layout = "primary" | "secondary";

export interface LayoutProps {
  layout?: Layout;
  isActive?: boolean;
}

export interface ButtonProps extends LayoutProps {
  onPress: () => void;
  label: string;
}
