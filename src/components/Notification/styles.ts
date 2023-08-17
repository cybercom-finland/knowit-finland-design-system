import { pxToRem } from '../../shared/styles';
import { darkTheme, lightTheme } from '../../shared/themes';
import { Severity } from '../../shared/types';

/**
 * Get color for the notification style and the color theme
 * @param style Style of the notification
 * @param theme Color theme that is in use
 * @returns Color for the style and theme as #rrggbb string
 */
export const NotificationIconColor = (
  style: Severity,
  theme: typeof darkTheme | typeof lightTheme
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
 * Spacing of the notification icons from the title text (horizontally)
 */
export const notificationIconSpacing = pxToRem(16);

/**
 * Minimum width of the notification area
 */
export const notificationMinWidth = pxToRem(300);

/**
 * Size of notification icons
 */
export const notificationIconSize = pxToRem(24);
