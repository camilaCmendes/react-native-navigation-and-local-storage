import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray600};
`;

export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray700};
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
`;

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`;

export const NumbersOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray200};
    font-size: ${theme.fontSizes.small}px;
  `}
`;
