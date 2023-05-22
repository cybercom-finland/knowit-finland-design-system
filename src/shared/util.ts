export const generateRandomString = (length: number) =>
  Array.from({ length: length }, () => Math.random().toString(36)[2]).join('');
