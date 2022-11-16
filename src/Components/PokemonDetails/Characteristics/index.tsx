import React from 'react';
import * as S from './styles';
import { handleText } from '../utils';
import { PokemonDetailsType } from '../types';

interface props {
  pokemon: PokemonDetailsType;
  mainType: string;
}

export const Characteristics: React.FC<props> = ({ pokemon, mainType }) => {
  return (
    <>
      <S.Description>
        {handleText(pokemon.species.flavorTexts[0].text)}
      </S.Description>

      <S.CharacteristicsWrapper>
        <S.BubbleWrapper>
          <S.BubbleTitleText>Weight</S.BubbleTitleText>
          <S.Bubble type={mainType}>
            <S.BubbleText type={mainType}>{pokemon.weight / 10}kg</S.BubbleText>
          </S.Bubble>
        </S.BubbleWrapper>

        <S.BubbleWrapper>
          <S.BubbleTitleText>Height</S.BubbleTitleText>
          <S.Bubble type={mainType}>
            <S.BubbleText type={mainType}>{pokemon.height / 10}m</S.BubbleText>
          </S.Bubble>
        </S.BubbleWrapper>

        <S.BubbleWrapper>
          <S.BubbleTitleText>Major Move</S.BubbleTitleText>
          <S.Bubble type={mainType}>
            <S.BubbleText type={mainType}>
              {handleText(pokemon.moves[0].move.name)}
            </S.BubbleText>
          </S.Bubble>
        </S.BubbleWrapper>
      </S.CharacteristicsWrapper>
    </>
  );
};
