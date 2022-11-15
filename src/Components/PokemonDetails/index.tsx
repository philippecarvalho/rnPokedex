import React from 'react';
import { useRoute } from '@react-navigation/native';
import * as S from './styles';
import { RouterProps } from './types';
import { Spinner } from '../Atoms/Spinner';
import usePokemonDetails from './hooks/usePokemonDetails';
import { Header } from './Header';
import { Stats } from './Stats';
import { Characteristics } from './Characteristics';

export const PokemonDetails = () => {
  const route = useRoute<RouterProps>();

  const { loading, mainType, pokemon } = usePokemonDetails({ route });

  return (
    <S.Card type={mainType}>
      <Header route={route} />

      {loading ? <Spinner /> : null}

      {!loading && Object.keys(pokemon).length > 0 && (
        <>
          <S.Body>
            <Characteristics mainType={mainType} pokemon={pokemon} />
            <Stats pokemon={pokemon} />
          </S.Body>
        </>
      )}
    </S.Card>
  );
};
