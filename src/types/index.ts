export interface PokemonData {
  pokemon: Pokemon[];
}

export interface Pokemon {
  name: string;
  id: number;
  sprites: Sprite[];
  types: Type[];
}

export interface Sprite {
  sprites: string;
}

export interface Type {
  pokemonType: PokemonType;
}

export interface PokemonType {
  name: string;
}
