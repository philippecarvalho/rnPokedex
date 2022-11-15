import styled, { css } from 'styled-components/native';

export const CardHeader = styled.View<{type: string}>`
  ${({ type, theme }) => css`
    flex-direction: row;
    height: 120px;
    background-color: ${theme.colors[type] || theme.colors.defaultBg};
    padding: 10px 0;
    justify-content: space-around;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-bottom: 15px;
  `}
`;

export const HeaderImageWrapper = styled.View`
  align-items: center;
  width: 50%;
`;

export const HeaderInfoWrapper = styled.View`
  padding: 10px 0 0 10px;
  width: 50%;
  justify-content: space-around;
`;

export const Id = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.yellow};
  `}
  border-radius: 10px;
  padding: 3px;
  width: 49px;
`;

export const IdText = styled.Text`
  text-align: center;
  font-size: 12px;
`;

export const Image = styled.Image`
  width: 103px;
  height: 103px;
`;

export const ImageWrapper = styled.View`
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px;
`;

export const Name = styled.Text<{type: string}>`
  ${({ theme, type }) => css`
    font-size: 22px;
    font-weight: bold;
    color: ${theme.colors[type] ? theme.colors.white : theme.colors.black};
    text-transform: capitalize;
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
