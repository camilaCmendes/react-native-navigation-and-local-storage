import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray300,
}))`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme }) => theme.colors.gray700};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  border-radius: 6px;
  padding: 16px;
`;
