import { Stat } from '../types';

export const handleText = (text: string) => {
  const newText = text.replace(/(\r\n|\n|\r|\f|-)/gm, ' ');

  return newText.charAt(0).toUpperCase() + newText.slice(1);
};

export const calculateStatsRate = (stat: Stat) => {
  const max = 100;
  const min = 0;

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
