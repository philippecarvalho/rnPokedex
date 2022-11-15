import { useEffect, useState } from 'react';
import { PokemonDetailsData, PokemonDetailsType, RouterProps } from '../types';
import { Pokemon } from '../../../types';
import { GET_POKEMON_BY_ID } from './queries';
import { useQuery } from '@apollo/client';

const usePokemonDetails = ({ route }: {route: RouterProps}) => {
  const pokemonData: Pokemon = route?.params?.pokemon;
  const mainType = route?.params?.mainType;
  const imageURI = route?.params?.imageURI;

  const [pokemon, setPokemon] = useState({} as PokemonDetailsType);

  const { data, loading } = useQuery<PokemonDetailsData>(GET_POKEMON_BY_ID, {
    variables: { id: pokemonData.id },
  });

  useEffect(() => {
    if (data) {
      setPokemon(data.pokemon[0]);
    }
  }, [data]);

  return { mainType, imageURI, pokemon, loading, pokemonData };
};

export default usePokemonDetails;
