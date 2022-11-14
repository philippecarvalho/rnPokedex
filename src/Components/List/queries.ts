import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query GetPokemons($offset: Int, $limit: Int) {
    pokemon_v2_pokemon(offset: $offset, limit: $limit) {
      name
      id
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;
