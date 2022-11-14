import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      darkBlue: string;
      lightBlue: string;
      midBlue: string;
      yellow: string;
      white: string;
      grass: string;
      fire: string;
      water: string;
      defaultBg: string;
      black: string;
    };
  }
}
