import { Person } from "@/assets";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.gray500};
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 6px;
`;

export const Name = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.medium}px;
    color: ${theme.colors.gray200};
  `}
`;

export const Icon = styled(Person).attrs(({ theme }) => ({
  color: theme.colors.gray100,
  width: 24,
  height: 24,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
