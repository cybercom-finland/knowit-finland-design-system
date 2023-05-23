import { generateRandomString } from '../src/shared/util';

describe('testing generateRandomString', () => {
  test('Various lengths', () => {
    for (let i = 0; i <= 100; i++) {
      const str = generateRandomString(i);
      expect(str.length).toBe(i);
    }
  });

  test('Always correct length and only valid characters', () => {
    for (let i = 0; i < 1000; i++) {
      const str = generateRandomString(10);
      expect(str.length).toBe(10);

      const matched = str.match(/[^a-z]|[^0-9]/g); // a-z and 0-9
      const validCharacterCount = (matched || '').length;
      expect(validCharacterCount).toBe(10);
    }
  });
});
