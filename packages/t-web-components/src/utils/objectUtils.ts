export const orderObject = <T>(obj: T, order: (keyof T)[]): T => {
  const orderedObj = {} as T;
  order.forEach(key => {
    orderedObj[key] = obj[key];
  });
  return orderedObj;
};
