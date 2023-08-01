import { darkTheme, lightTheme } from '../../shared/themes';
import { ComponentState } from '../../shared/types';

/**
 * Get color for the notification style and the color theme
 * @param style Style of the notification
 * @param theme Color theme that is in use
 * @returns Color for the style and theme as #rrggbb string
 */
export const NotificationIconColor = (
  style: ComponentState,
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
export const notificationIconSpacing = 16;

/**
 * Minimum width of the notification area
 */
export const notificationMinWidth = 564;

/**
 * Size of the notification title font
 */
export const notificationTitleFontSize = 22;

/**
 * Line height of the notification title
 */
export const notificationTitleLineHeight = 25.3;

/**
 * Size of the notification message font
 */
export const notificationMessageFontSize = 18;

/**
 * Line height of the notification message
 */
export const notificationMessageLineHeight = 20.7;
