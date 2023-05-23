import { spacing, convertToSpacingUnit, pxToRem } from '../src/shared/styles';

describe('testing spacing', () => {
  test('No value given', () => {
    expect(spacing()).toBe('0');
  });

  test('Empty array given', () => {
    expect(spacing([])).toBe('');
  });

  test('Very big spacing', () => {
    expect(spacing(500000)).toBe('250000rem');
  });

  test('Zero spacing', () => {
    expect(spacing(0)).toBe('0');
  });

  test('Negative value', () => {
    expect(spacing(-1)).toBe('-0.5rem');
  });

  test('Oversize array to maximum size of 4', () => {
    expect(spacing([1, 2, 3, 4, 5])).toBe('0.5rem 1rem 1.5rem 2rem');
  });

  test('Array of 0,1,1,0', () => {
    expect(spacing([0, 1, 1, 0])).toBe('0rem 0.5rem 0.5rem 0rem');
  });
});

describe('testing convertToSpacingUnit', () => {
  test('No value given', () => {
    expect(convertToSpacingUnit()).toBe(0);
  });

  test('Zero value', () => {
    expect(convertToSpacingUnit(0)).toBe(0);
  });

  test('Positive value', () => {
    expect(convertToSpacingUnit(80)).toBe(10);
  });

  test('Negative value', () => {
    expect(convertToSpacingUnit(-80)).toBe(-10);
  });

  test('Very large value', () => {
    expect(convertToSpacingUnit(8000000)).toBe(1000000);
  });
});

describe('testing pxToRem', () => {
  test('No value given', () => {
    expect(pxToRem()).toBe('0');
  });

  test('Zero value', () => {
    expect(pxToRem(0)).toBe('0');
  });

  test('Positive value', () => {
    expect(pxToRem(160)).toBe('10rem');
  });

  test('Negative value', () => {
    expect(pxToRem(-160)).toBe('-10rem');
  });

  test('Very large value', () => {
    expect(pxToRem(16000000)).toBe('1000000rem');
  });
});
