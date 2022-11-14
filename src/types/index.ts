export interface Pokemon {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: PokemonTypeData[];
  pokemon_v2_pokemonsprites: PokemonSpriteData[];
}

interface PokemonSpriteData {
  sprites: string;
}

interface PokemonTypeData {
  pokemon_v2_type: PokemonType;
}

interface PokemonType {
  name: string;
}

export interface PokemonData {
  pokemon_v2_pokemon: Pokemon[];
}
