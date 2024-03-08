import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xlarge}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
  color: ${({ theme }) => theme.colors.gray300};
`;
