import styled, { css } from 'styled-components/native';

export const Card = styled.View<{type: string}>`
  width: 90%;
  background-color: #f3f3f3;
  margin-bottom: 10px;
  border-radius: 15px;
  margin-top: 20px;
  align-self: center;
  align-items: flex-start;
  padding-bottom: 10px;
`;

export const Body = styled.View`
  padding: 0 5%;
`;
