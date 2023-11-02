// 1rem = 16px
export const baseSize = 16;
// 1 spacing unit = 8px
export const spacingUnitScalingFactor = 8;

/**
 * Method for consistent spacing in CSS margins and paddings.
 * Supports both single numeric value and number array.
 * Limits array length to 4 values internally.
 * @param value Given value in spacing units
 * @returns Spacing as rem units
 */
export const spacing = (value?: number | number[]): string => {
  const pxToRemScale = spacingUnitScalingFactor / baseSize;
  if (Array.isArray(value)) {
    return value
      .slice(0, 4)
      .map((v) => `${v * pxToRemScale}rem`)
      .join(' ');
  }
  return !value ? '0' : `${value * pxToRemScale}rem`;
};

/**
 * Converts given value into spacing unit
 * @param valueInPx Given value in pixels
 * @returns Value converted to spacing unit
 */
export const convertToSpacingUnit = (valueInPx?: number): number => {
  return !valueInPx ? 0 : valueInPx / spacingUnitScalingFactor;
};

/**
 * Converts pixels to rem
 * @param valueInPx Given value in pixels
 * @returns Value converted to rem
 */
export const pxToRem = (valueInPx?: number): string => {
  return !valueInPx ? '0' : `${valueInPx / baseSize}rem`;
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
    heading1: pxToRem(40),
    heading2: pxToRem(32),
    heading3: pxToRem(28),
    heading4: pxToRem(24),
    paragraph: pxToRem(18),
    paragraph2: pxToRem(16),
    label: {
      small: pxToRem(14),
      medium: pxToRem(18),
      large: pxToRem(22),
    },
    caption: pxToRem(14),
    li: pxToRem(16),
  },
  lineHeight: {
    heading1: pxToRem(48),
    heading2: pxToRem(40),
    heading3: pxToRem(36),
    heading4: pxToRem(32),
    paragraph: pxToRem(28),
    paragraph2: pxToRem(24),
    label: {
      small: pxToRem(16),
      medium: pxToRem(24),
      large: pxToRem(28),
    },
    caption: pxToRem(16),
    li: pxToRem(24),
  },
};
