import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xlarge}px;
    color: ${theme.colors.white};
  `}
`;

export const SubTitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.fontSizes.medium}px;
    color: ${theme.colors.gray300};
  `}
`;
