import { UsersThree } from "@/assets";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${({ theme }) => theme.colors.gray500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  color: ${({ theme }) => theme.colors.gray200};
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  width: 32,
  height: 32,
  color: theme.colors.green700,
}))`
  margin-right: 20px;
`;
