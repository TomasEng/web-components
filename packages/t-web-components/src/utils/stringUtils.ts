export const kebabToCamel = (kebab: string) => kebab.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

export const kebabToPascal = (kebab: string) => kebabToCamel(kebab).replace(/^[a-z]/, (g) => g.toUpperCase());
