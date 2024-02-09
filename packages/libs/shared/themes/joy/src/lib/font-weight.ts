import { CssVarsThemeOptions } from '@mui/joy';

declare module '@mui/joy/styles' {
  interface FontWeight {
    xs: false;
    xl: false;
  }
}

export const fontWeight: CssVarsThemeOptions['fontWeight'] = {
  xs: 300,
  sm: 300,
  md: 400,
  lg: 500,
  xl: 500,
};
