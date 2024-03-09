import styled from "styled-components/native";
import { LayoutProps } from "./types";

export const Button = styled.TouchableOpacity<LayoutProps>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;

  ${({ layout, theme, isActive }) => {
    if (layout === "primary" && !isActive)
      return `background-color: ${theme.colors.green500}`;
    if (layout === "primary" && isActive)
      return `background-color: ${theme.colors.green700}`;
    if (layout === "secondary" && !isActive)
      return `background-color: ${theme.colors.readDark}`;
    if (layout === "secondary" && isActive)
      return `background-color: ${theme.colors.red}`;
  }};
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 900;
`;
