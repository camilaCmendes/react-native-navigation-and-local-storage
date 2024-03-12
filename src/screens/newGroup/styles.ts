import { UsersThree } from "@/assets";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray600};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  width: 56,
  height: 56,
  color: theme.colors.green700,
}))`
  align-self: center;
`;
