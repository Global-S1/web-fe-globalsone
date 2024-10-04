export const objectToArray = <T>(obj: Record<string, T>): T[] => {
  return Object.values(obj);
};
