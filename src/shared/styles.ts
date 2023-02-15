/**
 * Method for consistent spacing in CSS margins and paddings.
 * Supports both single numeric value and number array.
 * Limits array length to 4 values internally.
 */
export const spacing = (value: number | number[] | undefined): string => {
  if (!value) {
    return '0';
  }
  if (Array.isArray(value)) {
    return value.slice(0,4).map(v => `${v * 0.5}rem`).join(' ');
  }
  return `${value * 0.5}rem`;
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
    caption: '14px',
    paragraph: '22px',
    paragraph2: '18px',
    heading1: '70px',
    heading2: '40px',
    heading3: '32px',
    heading4: '26px'
  },
  lineHeight: {
    caption: '16px',
    paragraph: '25px',
    paragraph2: '21px',
    heading1: '80px',
    heading2: '46px',
    heading3: '37px',
    heading4: '30px'
  }
};
