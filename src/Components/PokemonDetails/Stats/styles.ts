import styled, { css } from 'styled-components/native';

const getFillColor = (fillRate: number) => {
  if (fillRate >= 50) {
    return 'green';
  } else {
    return 'red';
  }
};

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

export const StatsTitles = styled.View`
  width: 50%;
`;

export const StatsValues = styled.View`
  width: 50%;
`;

export const GenderRatesWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 23px;
`;

export const GenderItem = styled.View`
  flex-direction: row;
`;

export const GenderRateText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.darkBlue};
    margin-left: 5px;
  `}
`;

export const StatsTextWrapper = styled.View`
  height: 20px;
  margin-bottom: 2px;
`;

export const StatsValueItem = styled.View`
  height: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 2px;
`;
