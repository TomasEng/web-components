export const orderObject = <T>(obj: T, order: (keyof T)[]): T => {
  const orderedObj = {} as T;
  order.forEach(key => {
    orderedObj[key] = obj[key];
  });
  return orderedObj;
};

export const stringifyObject = (obj: any) => {
  return stringifyObjectLines(obj).join('\n');
}

export const stringifyObjectLines = (obj: any): string[] => {
  const lines: string[] = [];
  switch (typeof obj) {
    case 'object': {
      if (Array.isArray(obj)) {
        lines.push('[');
        obj.forEach((item, index) => {
          const subLines = stringifyObjectLines(item);
          const isLastItem = index === obj.length - 1;
          const end = isLastItem ? '' : ',';
          if (subLines.length === 1) {
            lines.push(`  ${subLines[0]}${end}`);
          } else {
            lines.push(`  ${subLines[0]}`);
            lines.push(...subLines.slice(1, subLines.length - 1).map(line => `  ${line}`));
            lines.push(`  ${subLines[subLines.length - 1]}${end}`);
          }
        });
        lines.push(']');
      } else if (obj === null) {
        lines.push('null');
      } else if (obj?.type === 'console-log') {
        lines.push(`() => console.log(${JSON.stringify(obj.input)})`);
      } else if (obj?.type === 'date') {
        lines.push(`new Date(${typeof obj.input === 'string' ? JSON.stringify(obj.input) : ''})`);
      } else {
        lines.push('{');
        for (const key in obj) {
          const subLines = stringifyObjectLines(obj[key]);
          const isLastKey = key === lastKey(obj);
          const end = isLastKey ? '' : ',';
          const keyString = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(key) ? key : JSON.stringify(key);
          if (subLines.length === 1) {
            lines.push(`  ${keyString}: ${subLines[0]}${end}`);
          } else {
            lines.push(`  ${keyString}: ${subLines[0]}`);
            lines.push(...subLines.slice(1, subLines.length - 1).map(line => `  ${line}`));
            lines.push(`  ${subLines[subLines.length - 1]}${end}`);
          }
        }
        lines.push('}');
      }
    }
    break;
    case 'function':
      const subLines = obj.toString().split('\n');
      lines.push(...subLines);
      break;
    case 'undefined':
      lines.push('undefined');
      break;
    default:
      lines.push(JSON.stringify(obj));
      break;
  }
  return lines;
}

const lastKey = <T>(obj: T): keyof T => {
  const keys = Object.keys(obj);
  return keys[keys.length - 1] as keyof T;
};
