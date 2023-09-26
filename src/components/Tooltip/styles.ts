import { pxToRem } from '../../shared/styles';

/**
 * Padding of the tooltip
 */
export const tooltipPadding = pxToRem(16);

/**
 * React-icons arrows have a small empty surrounding space we don't want
 * to see on tooltips, so set up a specific width or height which crops the
 * arrow sufficiently
 */
export const arrowVisibleSize = pxToRem(8);
