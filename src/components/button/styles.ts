import styled from "styled-components/native";
import { LayoutProps } from "./types";

export const Button = styled.TouchableOpacity<LayoutProps>`
  padding: 10px;
  border-radius: 8px;

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
  color: ${({ theme }) => theme.colors.white};
  font-weight: 900;
`;
