export const kebabToCamel = (kebab: string) => kebab.replace(/-([a-z0-9])/g, (g) => g[1].toUpperCase());

export const kebabToPascal = (kebab: string) => kebabToCamel(kebab).replace(/^[a-z]/, (g) => g.toUpperCase());

export const camelToPascal = (camel: string) => camel.replace(/^[a-z]/, (g) => g.toUpperCase());

export const collapseWhitespace = (text: string) => text.replace(/\s+/g, ' ');

export const trimMargin = (text: string) => text.trim().replace(/^((?<!\|).)*/gm, '');
