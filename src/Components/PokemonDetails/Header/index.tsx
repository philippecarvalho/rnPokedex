import { View, Text } from 'react-native';
import React from 'react';
import * as S from './styles';
import usePokemonDetails from '../hooks/usePokemonDetails';
import { RouterProps } from '../types';

const padNumber = (number: number) => {
  return String('000' + number).slice(-3);
};

export const Header = ({ route }: {route: RouterProps}) => {
  const { mainType, imageURI, pokemonData } = usePokemonDetails({ route });

  return (
    <S.CardHeader type={mainType}>
      <S.HeaderImageWrapper>
        <S.Image source={{ uri: imageURI }} />
      </S.HeaderImageWrapper>

      <S.HeaderInfoWrapper>
        <S.Id>
          <S.IdText>#{padNumber(pokemonData.id)}</S.IdText>
        </S.Id>
        <S.Name type={mainType}>{pokemonData.name}</S.Name>

        <S.TypeWrapper>
          {pokemonData.types.map((type, index, array) => (
            <S.TypeBox isLastChild={index + 1 === array.length}>
              <S.TypeText type={mainType}>{type.pokemonType.name}</S.TypeText>
            </S.TypeBox>
          ))}
        </S.TypeWrapper>
      </S.HeaderInfoWrapper>
    </S.CardHeader>
  );
};
