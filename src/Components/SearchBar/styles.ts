import styled, { css } from 'styled-components/native';

export const Input = styled.TextInput`
  ${({ theme }) => css`
    margin-left: 5px;
    color: ${theme.colors.darkBlue};
  `}
`;

export const InputWrapper = styled.View`
  ${({ theme }) => css`
    border-color: ${theme.colors.darkBlue};
    border-width: 1px;
    width: 90%;
    height: 40px;

    margin-bottom: 10px;
    border-radius: 100px;

    padding: 0 10px;
    flex-direction: row;
    align-items: center;
    align-self: center;
  `}
`;

export const ArrowCircle = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkBlue};
    border-radius: 100px;
    padding: 5px;
    margin-left: auto;
  `}
`;
