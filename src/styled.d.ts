// See: https://styled-components.com/docs/api#typescript
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      neutral: string;
      grayScale: {
        digitalBlack: string;
        digitalBlack100: string;
        digitalBlack200: string;
        digitalBlack300: string;
        digitalBlack400: string;
        digitalBlack900: string;
      };
      additional: {
        forest: string;
        pear: string;
        mint: string;
        leather: string;
        flamingo: string;
        melon: string;
        clay: string;
      };
      success: {
        success: string;
        success200: string;
        success800: string;
      };
      warning: {
        warning: string;
        warning200: string;
        warning800: string;
      };
      danger: {
        danger: string;
        danger200: string;
        danger800: string;
      };
      info: {
        info: string;
        info200: string;
        info800: string;
      };
    };
  }
}
