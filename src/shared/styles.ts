// 1rem = 16px
export const baseSize = 16;
// 1 spacing unit = 8px
export const scalingFactor = 8;

/**
 * Method for consistent spacing in CSS margins and paddings.
 * Supports both single numeric value and number array.
 * Limits array length to 4 values internally.
 */
export const spacing = (value?: number | number[]): string => {
  if (!value) {
    return '0';
  }
  if (Array.isArray(value)) {
    return value
      .slice(0, 4)
      .map((v) => `${(v * scalingFactor) / baseSize}rem`)
      .join(' ');
  }
  return `${(value * scalingFactor) / baseSize}rem`;
};

/**
 * Converts given value into spacing unit
 * @param valueInPx Given value in pixels
 * @returns Value converted to spacing unit
 */
export const convertToSpacingUnit = (valueInPx?: number) => {
  if (!valueInPx) {
    return 0;
  }
  return valueInPx / scalingFactor;
};

/**
 * Converts pixels to rem
 * @param valueInPx Given value in pixels
 * @returns Value converted to rem
 */
export const pxToRem = (valueInPx?: number) => {
  if (!valueInPx) {
    return 0;
  }
  return `${valueInPx / baseSize}rem`;
};

/**
 * Common style variables used in global and component styles.
 * Currently placeholders for testing, change when real styles are designed.
 */
export const typography = {
  font: 'Arial',
  weight: {
    regular: '400',
    bold: '700',
  },
  size: {
    caption: pxToRem(14),
    paragraph: pxToRem(22),
    paragraph2: pxToRem(18),
    heading1: pxToRem(70),
    heading2: pxToRem(40),
    heading3: pxToRem(32),
    heading4: pxToRem(26),
  },
  lineHeight: {
    caption: pxToRem(16),
    paragraph: pxToRem(25),
    paragraph2: pxToRem(21),
    heading1: pxToRem(80),
    heading2: pxToRem(46),
    heading3: pxToRem(37),
    heading4: pxToRem(30),
  },
};
