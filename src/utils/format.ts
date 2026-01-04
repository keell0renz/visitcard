export const formatYCBatch = (batch: string): string => {
  const parts = batch.split(' ');
  const season = parts[0];
  const year = parts[1];

  const seasonMap: Record<string, string> = {
    Summer: 'S',
    Spring: 'X',
    Fall: 'F',
    Winter: 'W',
  };

  const seasonLetter = seasonMap[season] || season.charAt(0);
  return `${seasonLetter}${year.slice(-2)}`;
};
