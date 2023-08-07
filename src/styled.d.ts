// See: https://styled-components.com/docs/api#typescript
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    [key: string]: string;
  }
}
