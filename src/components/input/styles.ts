import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray300,
}))`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  padding: 16px;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray700};
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.medium}px;
  `}
`;
