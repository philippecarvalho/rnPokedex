import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from './queries';
import { ListItem } from '../ListItem';
import { Pokemon, PokemonData } from '../../types';
import { Spinner } from '../Atoms/Spinner';

export const List = () => {
  const { loading, error, data, fetchMore } = useQuery<PokemonData>(
    GET_POKEMONS,
    {
      variables: { offset: 0, limit: 10 },
    },
  );

  const renderItem = ({ item }: {item: Pokemon}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', paddingTop: 10 }}>
        <ListItem item={item} />
      </View>
    );
  };

  return (
    <View>
      {loading ? <Spinner /> : null}

      {/* TODO */}
      {error ? <Text>Error!</Text> : null}

      {!loading && data && (
        <>
          <FlatList
            keyExtractor={item => item.name}
            data={data.pokemon}
            renderItem={renderItem}
            numColumns={2}
            onEndReached={() =>
              fetchMore({ variables: { offset: data.pokemon.length } })
            }
          />
        </>
      )}
    </View>
  );
};
