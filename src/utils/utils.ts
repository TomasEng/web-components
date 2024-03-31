export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function asPercents(n: number): string {
  return `${(n * 100).toFixed()}%`;
}
