import { DefaultTheme } from 'styled-components';
import { Severity } from '../../shared/types';

/**
 * Get color for the loading indicator style and the color theme
 * @param severity Severity of the loading indicator
 * @param theme Color theme that is in use
 * @returns Color for the style and theme as #rrggbb string
 */
export const LoadingIndicatorColor = (
  severity: Severity,
  theme: DefaultTheme
): string => {
  switch (severity) {
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
