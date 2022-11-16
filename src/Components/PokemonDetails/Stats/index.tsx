import { View } from 'react-native';
import React from 'react';
import * as S from './styles';
import {
  calculateGenderRate,
  calculateStatsRate,
  calculateTotal,
  calculateTotalStats,
  handleText,
} from '../utils';
import { PokemonDetailsType } from '../types';
import { MaleIcon } from './images/MaleIcon';
import { FemaleIcon } from './images/FemaleIcon';

export const Stats = ({ pokemon }: {pokemon: PokemonDetailsType}) => {
  return (
    <S.StatsWrapper>
      <S.StatsTitles>
        <S.StatsText>Gender</S.StatsText>

        {pokemon.stats.map((stat, index) => (
          <S.StatsTextWrapper key={index}>
            <S.StatsText>{handleText(stat.stat.name)}</S.StatsText>
          </S.StatsTextWrapper>
        ))}

        <S.StatsText>Total</S.StatsText>
      </S.StatsTitles>

      <S.StatsValues style={{ width: '50%' }}>
        <S.GenderRatesWrapper>
          <S.GenderItem>
            <MaleIcon />
            <S.GenderRateText>
              {100 - calculateGenderRate(pokemon.species.genderRate)}%
            </S.GenderRateText>
          </S.GenderItem>

          <S.GenderItem>
            <FemaleIcon />
            <S.GenderRateText>
              {calculateGenderRate(pokemon.species.genderRate)}%
            </S.GenderRateText>
          </S.GenderItem>
        </S.GenderRatesWrapper>

        {pokemon.stats.map((stat, index) => (
          <S.StatsValueItem key={index}>
            <S.StatsText style={{ marginRight: 5 }}>{stat.value}</S.StatsText>
            <View>
              <S.FillBar fillRate={calculateStatsRate(stat)} />
              <S.EmptyBar />
            </View>
          </S.StatsValueItem>
        ))}

        <S.StatsValueItem>
          <S.StatsText style={{ marginRight: 5 }}>
            {calculateTotal(pokemon)}
          </S.StatsText>
          <View>
            <S.FillBar fillRate={calculateTotalStats(pokemon.stats)} />
            <S.EmptyBar />
          </View>
        </S.StatsValueItem>
      </S.StatsValues>
    </S.StatsWrapper>
  );
};
