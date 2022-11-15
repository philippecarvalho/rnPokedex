import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query GetPokemons($offset: Int, $limit: Int) {
    pokemon: pokemon_v2_pokemon(offset: $offset, limit: $limit) {
      name
      id
      sprites: pokemon_v2_pokemonsprites {
        sprites
      }
      types: pokemon_v2_pokemontypes {
        pokemonType: pokemon_v2_type {
          name
        }
      }
    }
  }
`;
