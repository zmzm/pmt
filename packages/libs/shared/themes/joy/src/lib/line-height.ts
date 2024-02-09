import { CssVarsThemeOptions } from '@mui/joy';

declare module '@mui/joy/styles' {
  interface LineHeight {
    xs: false;
    xl: false;
  }
}

export const lineHeight: CssVarsThemeOptions['lineHeight'] = {
  xs: '1rem', // 16px
  sm: '1rem', // 16px
  md: '1.5rem', // 24 px
  lg: '2rem', // 32 px
  xl: '2rem', // 32 px
};
