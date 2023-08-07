import { DefaultTheme } from 'styled-components';
import { ComponentState } from '../../shared/types';

/**
 * Get color for the loading indicator style and the color theme
 * @param style Style of the loading indicator
 * @param theme Color theme that is in use
 * @returns Color for the style and theme as #rrggbb string
 */
export const LoadingIndicatorColor = (
  style: ComponentState,
  theme: DefaultTheme
): string => {
  switch (style) {
    case 'success':
      return theme.colors.success.success;
    case 'warning':
      return theme.colors.warning.warning;
    case 'error':
      return theme.colors.danger.danger;
    case 'info':
      return theme.colors.info.info;
    default:
      return theme.colors.grayScale.digitalBlack;
  }
};

/**
 * Height of the linear loading indicator bar
 */
export const linearLoadingIndicatorHeight = 5;
