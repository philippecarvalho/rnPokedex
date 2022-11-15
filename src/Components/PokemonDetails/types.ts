import { Pokemon } from '../../types';

export interface RouterProps {
  params: PokemonDetailsParams;
  key: string;
  name: string;
  path?: string | undefined;
}

interface PokemonDetailsParams {
  pokemon: Pokemon;
  mainType: string;
  imageURI: string;
}

export interface PokemonDetailsData {
  pokemon: PokemonDetailsType[];
}

export interface PokemonDetailsType {
  height: number;
  weight: number;
  moves: Moves[];
  species: Species;
  stats: Stat[];
}

type Moves = {
  move: {
    name: string;
  };
};

type Species = {
  genderRate: number;
  flavorTexts: {text: string}[];
};

export type Stat = {
  stat: {
    name: string;
    details: {
      values: {
        max: {
          value: number;
        };
        min: {
          value: number;
        };
        avg: {
          value: number;
        };
      };
    };
  };
  value: number;
};
