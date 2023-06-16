import { darkTheme, lightTheme } from './themes';

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
    heading1: pxToRem(70),
    heading2: pxToRem(40),
    heading3: pxToRem(32),
    heading4: pxToRem(26),
    paragraph: pxToRem(22),
    paragraph2: pxToRem(18),
    caption: pxToRem(14),
  },
  lineHeight: {
    heading1: pxToRem(80),
    heading2: pxToRem(46),
    heading3: pxToRem(37),
    heading4: pxToRem(30),
    paragraph: pxToRem(25),
    paragraph2: pxToRem(21),
    caption: pxToRem(16),
  },
};

/**
 * Different styles for the loading indicator
 */
export enum LoadingIndicatorStyle {
  Default,
  Success,
  Warning,
  Error,
  Info,
}

/**
 * Get color for the loading indicator style and the color theme
 * @param style Style of the loading indicator
 * @param theme Color theme that is in use
 * @returns Color for the style and theme as #rrggbb string
 */
export const LoadingIndicatorColor = (
  style: LoadingIndicatorStyle,
  theme: typeof darkTheme | typeof lightTheme
): string => {
  switch (style) {
    case LoadingIndicatorStyle.Success:
      return theme.colors.success.success;
    case LoadingIndicatorStyle.Warning:
      return theme.colors.warning.warning;
    case LoadingIndicatorStyle.Error:
      return theme.colors.danger.danger;
    case LoadingIndicatorStyle.Info:
      return theme.colors.info.info;
    default:
      return theme.colors.grayScale.digitalBlack;
  }
};

/**
 * Height of the linear loading indicator bar
 */
export const linearLoadingIndicatorHeight = 5;
