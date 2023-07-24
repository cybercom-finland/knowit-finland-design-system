import { darkTheme, lightTheme } from '../../shared/themes';

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
