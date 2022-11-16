import { PokemonDetailsType, Stat } from '../types';

export const handleText = (text: string) => {
  const newText = text.replace(/(\r\n|\n|\r|\f|-)/gm, ' ');

  return newText.charAt(0).toUpperCase() + newText.slice(1);
};

export const calculateStatsRate = (stat: Stat) => {
  const max = stat.stat.details.values.max.value;
  const min = stat.stat.details.values.min.value;

  const value = stat.value;

  return ((value - min) * 100) / (max - min);
};

export const calculateTotalStats = (stats: Stat[]) => {
  let max = 0;
  let min = 0;
  let value = 0;

  stats.forEach(stat => {
    max = max + stat.stat.details.values.avg.value;
    min = min + stat.stat.details.values.min.value;
    value = value + stat.value;
  });

  return ((value - min) * 100) / (max - min);
};

export const calculateGenderRate = (genderRate: number) => {
  return ((genderRate * 1) / 8) * 100;
};

export const calculateTotal = (pokemon: PokemonDetailsType) => {
  let total = 0;
  pokemon.stats.forEach(stat => (total = total + stat.value));
  return total;
};
