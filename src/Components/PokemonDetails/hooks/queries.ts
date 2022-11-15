import { gql } from '@apollo/client';

export const GET_POKEMON_BY_ID = gql`
  query single($id: Int) {
    pokemon: pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
      height
      weight
      moves: pokemon_v2_pokemonmoves(
        order_by: {pokemon_v2_move: {power: desc}}
        where: {pokemon_v2_move: {power: {_is_null: false}}}
        limit: 1
      ) {
        move: pokemon_v2_move {
          name
        }
      }
      species: pokemon_v2_pokemonspecy {
        genderRate: gender_rate
        flavorTexts: pokemon_v2_pokemonspeciesflavortexts(
          limit: 1
          where: {pokemon_v2_language: {name: {_eq: "en"}}}
        ) {
          text: flavor_text
        }
      }
      stats: pokemon_v2_pokemonstats {
        stat: pokemon_v2_stat {
          name
          details: pokemon_v2_pokemonstats_aggregate {
            values: aggregate {
              max {
                value: base_stat
              }
              min {
                value: base_stat
              }
              avg {
                value: base_stat
              }
            }
          }
        }
        value: base_stat
      }
    }
  }
`;
