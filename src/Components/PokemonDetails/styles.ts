import styled, { css } from 'styled-components/native';

const getFillColor = (fillRate: number) => {
  if (fillRate > 50) {
    return 'green';
  } else {
    return 'red';
  }
};

export const Card = styled.View<{type: string}>`
  width: 90%;
  background-color: #f3f3f3;
  margin-bottom: 10px;
  border-radius: 15px;
  margin-top: 20px;
  align-self: center;
  align-items: flex-start;
`;

export const CardHeader = styled.View<{type: string}>`
  ${({ type, theme }) => css`
    flex-direction: row;
    height: 120px;
    background-color: ${theme.colors[type] || theme.colors.defaultBg};
    padding: 10px 0;
    justify-content: space-around;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
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

export const Body = styled.View`
  padding: 0 5%;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.darkBlue};
    text-align: center;
  `}
`;

export const CharacteristicsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10%;
  margin: 10px 0;
`;

export const BubbleWrapper = styled.View`
  flex-direction: column;
`;

//FIXME rename
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

export const StatsWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0 10px;
`;

export const FillBar = styled.View<{fillRate: number}>`
  ${({ fillRate, theme }) => css`
    width: ${fillRate}px;
    background-color: ${theme.colors[getFillColor(fillRate)]};
    height: 5px;
    border-radius: 10px;
    position: absolute;
    z-index: 9;
  `}
`;

export const EmptyBar = styled.View`
  background-color: #b7b7b8;
  width: 100px;
  height: 5px;
  border-radius: 10px;
`;

export const StatsText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.darkBlue};
  `}
`;
