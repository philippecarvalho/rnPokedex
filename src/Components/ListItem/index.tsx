import React from 'react';
import * as S from './styles';
import { Pokemon } from '../../types';

interface props {
  item: Pokemon;
}

export const ListItem: React.FC<props> = ({ item }) => {
  const sprites = JSON.parse(item.pokemon_v2_pokemonsprites[0].sprites);

  const imageURI = sprites.other['official-artwork'].front_default;
  const mainType = item.pokemon_v2_pokemontypes[0].pokemon_v2_type.name;

  return (
    <S.Card type={mainType}>
      <S.Id>
        <S.IdText>#{item.id}</S.IdText>
      </S.Id>

      <S.ImageWrapper>
        <S.Image style={{ transform: [{ scale: 1.3 }] }} source={{ uri: imageURI }} />
      </S.ImageWrapper>

      <S.Name type={mainType}>{item.name}</S.Name>

      <S.TypeWrapper>
        {item.pokemon_v2_pokemontypes.map((type, index, array) => (
          <S.TypeBox isLastChild={index + 1 === array.length}>
            <S.TypeText type={mainType}>{type.pokemon_v2_type.name}</S.TypeText>
          </S.TypeBox>
        ))}
      </S.TypeWrapper>
    </S.Card>
  );
};
