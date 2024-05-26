export const findUniqueIndex = <T>(array: T[], value: T) => {
  const unique = uniqueItems(array);
  return unique.indexOf(value);
};

export const uniqueItems = <T>(array: T[]): T[] => [...new Set(array)];

export const reversed = <T>(array: T[]): T[] => array.slice().reverse();

export const findLastIndex = <T>(array: T[], predicate: (value: T) => boolean) => {
  const reversedArray = reversed(array);
  const indexInReversedArray = reversedArray.findIndex(predicate);
  if (indexInReversedArray === -1) return -1;
  if (indexInReversedArray === reversedArray.length - 1) return 0;
  return (indexInReversedArray - reversedArray.length + 1) * -1;
}
