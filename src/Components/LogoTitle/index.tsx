import { Image } from 'react-native';
import React from 'react';

export const LogoTitle = () => {
  return (
    <Image
      style={{ width: 122, height: 45 }}
      source={require('./img/pokemon_logo.png')}
    />
  );
};
