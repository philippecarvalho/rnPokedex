import { View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from './queries';
import { ListItem } from '../ListItem';
import { Pokemon, PokemonData } from '../../types';
import { Spinner } from '../Atoms/Spinner';
import { SearchBar } from '../SearchBar';
import styled, { css } from 'styled-components/native';

const MainText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.darkBlue};
    font-weight: bold;
    font-size: 20px;
    align-self: center;
    margin: 10px 0 20px;
  `}
`;

export const List = () => {
  const [searchFilter, setSearchFilter] = useState('');

  const { loading, data, fetchMore } = useQuery<PokemonData>(GET_POKEMONS);

  const renderItem = ({ item }: {item: Pokemon}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', paddingTop: 10 }}>
        <ListItem item={item} />
      </View>
    );
  };

  const filterPokemon = (pokemon: Pokemon) => {
    return pokemon.name.includes(searchFilter.toLowerCase());
  };

  return (
    <View>
      <MainText>
        More than 250 Pokemons for you to choose your favorite
      </MainText>
      {loading ? <Spinner /> : null}

      {!loading && data && (
        <>
          <SearchBar setSearchFilter={setSearchFilter} />
          <FlatList
            keyExtractor={item => item.name}
            data={
              searchFilter ? data.pokemon.filter(filterPokemon) : data.pokemon
            }
            renderItem={renderItem}
            numColumns={2}
            onEndReached={() => {
              if (!searchFilter) {
                fetchMore({ variables: { offset: data.pokemon.length } });
              }
            }}
            ListFooterComponent={() => (loading ? <Spinner /> : null)}
          />
        </>
      )}
    </View>
  );
};
