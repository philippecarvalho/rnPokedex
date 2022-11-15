import styled, { css } from 'styled-components/native';

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.darkBlue};
    text-align: center;
    margin-bottom: 10px;
  `}
`;

export const CharacteristicsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10%;
  margin: 10px 0 20px 0;
`;

export const BubbleWrapper = styled.View`
  flex-direction: column;
`;

export const Bubble = styled.View<{type: string}>`
  ${({ theme, type }) => css`
    text-align: center;
    padding: 2px 8px;
    border-radius: 10px;
    background-color: ${theme.colors[type] || theme.colors.defaultBg};
  `}
`;

export const BubbleTitleText = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.midBlue};
    font-size: 10px;
    margin-bottom: 4px;
  `}
`;

export const BubbleText = styled.Text<{type: string}>`
  ${({ theme, type }) => css`
    text-align: center;
    font-weight: bold;
    color: ${theme.colors[type] ? theme.colors.white : theme.colors.black};
  `}
`;
