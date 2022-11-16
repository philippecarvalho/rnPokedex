import { View } from 'react-native';
import React from 'react';
import * as S from './styles';
import { SearchIcon } from './images/SearchIcon';

interface props {
  setSearchFilter: (input: string) => void;
}

export const SearchBar: React.FC<props> = ({ setSearchFilter }) => {
  return (
    <View style={{ alignSelf: 'center', width: '100%' }}>
      <S.InputWrapper>
        <SearchIcon />
        <S.Input
          onChangeText={setSearchFilter}
          placeholder="Search Pokémon"
          placeholderTextColor="rgba(33, 56, 110, 1)"
        />
      </S.InputWrapper>
    </View>
  );
};
