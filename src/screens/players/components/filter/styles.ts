import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { FilterStyleProps } from "./types";

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.colors.green700};
    `};

  border-radius: 4px;
  margin-right: 12px;
  height: 38px;
  width: 70px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.small}px;
    color: ${theme.colors.white};
  `}
`;
