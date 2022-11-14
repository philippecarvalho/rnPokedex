import styled, { css } from 'styled-components/native';

export const Card = styled.View<{type: string}>`
  ${({ theme, type }) => css`
    width: 140px;
    height: 189px;
    background-color: ${theme.colors[type] || theme.colors.defaultBg};
    margin-bottom: 10px;
    border-radius: 15px;
    align-items: center;
  `}
`;

export const Id = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.yellow};
  `}
  border-radius: 10px;
  padding: 3px;
  margin-top: -5px;
  margin-bottom: 10px;
  min-width: 49px;
`;

export const IdText = styled.Text`
  text-align: center;
  font-size: 12px;
`;

export const Image = styled.Image`
  width: 90px;
  height: 90px;
`;

export const ImageWrapper = styled.View`
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px;
`;

export const Name = styled.Text<{type: string}>`
  ${({ theme, type }) => css`
    font-size: 18px;
    font-weight: bold;
    color: ${theme.colors[type] ? theme.colors.white : theme.colors.black};
    text-transform: capitalize;
    margin-bottom: 5px;
  `}
`;

export const TypeWrapper = styled.View`
  flex-direction: row;
`;

export const TypeBox = styled.View<{isLastChild: boolean}>`
  ${({ isLastChild }) => css`
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    align-self: flex-start;
    margin-right: ${isLastChild ? 0 : 5}px;
  `}
`;

export const TypeText = styled.Text<{type: string}>`
  ${({ theme, type }) => css`
    font-size: 12px;
    color: ${theme.colors[type] ? theme.colors.white : theme.colors.black};
    padding: 5px 10px;
    text-transform: capitalize;
  `}
`;
