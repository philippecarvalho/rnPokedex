import { Stat } from '../types';

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

export const calculateGenderRate = (genderRate: number) => {
  return ((genderRate * 1) / 8) * 100;
};
