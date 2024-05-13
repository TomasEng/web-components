export const findUniqueIndex = <T>(array: T[], value: T) => {
  const unique = uniqueItems(array);
  return unique.indexOf(value);
};

export const uniqueItems = <T>(array: T[]): T[] => [...new Set(array)];
