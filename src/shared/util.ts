export const generateRandomString = (length: number) =>
  Math.random()
    .toString(36)
    .substring(2, length + 2);
