import { ActivityIndicator } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

export const SpinnerWrapper = styled.View`
  align-self: center;
  margin: 30px 0;
`;

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <ActivityIndicator color={'grey'} size={'large'} />
    </SpinnerWrapper>
  );
};
