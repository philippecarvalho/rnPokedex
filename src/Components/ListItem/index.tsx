import React from 'react';
import * as S from './styles';
import { Pokemon } from '../../types';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface props {
  item: Pokemon;
}

const padNumber = (number: number) => {
  return String('000' + number).slice(-3);
};

export const ListItem: React.FC<props> = ({ item }) => {
  const sprites = JSON.parse(item.sprites[0].sprites);
  const imageURI = sprites.other['official-artwork'].front_default;
  const mainType = item.types[0].pokemonType.name;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('PokemonDetails', {
          pokemon: item,
          mainType,
          imageURI,
        })
      }>
      <S.Card type={mainType}>
        <S.Id>
          <S.IdText>#{padNumber(item.id)}</S.IdText>
        </S.Id>

        <S.ImageWrapper>
          <S.Image
            style={{ transform: [{ scale: 1.2 }] }}
            source={{ uri: imageURI }}
          />
        </S.ImageWrapper>

        <S.Name type={mainType}>{item.name}</S.Name>

        <S.TypeWrapper>
          {item.types.map((type, index, array) => (
            <S.TypeBox isLastChild={index + 1 === array.length}>
              <S.TypeText type={mainType}>{type.pokemonType.name}</S.TypeText>
            </S.TypeBox>
          ))}
        </S.TypeWrapper>
      </S.Card>
    </TouchableOpacity>
  );
};
