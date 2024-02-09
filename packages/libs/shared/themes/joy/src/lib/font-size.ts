import { CssVarsThemeOptions } from '@mui/joy';

declare module '@mui/joy/styles' {
  interface FontSize {
    xl3: false;
    xl4: false;
  }
}

export const fontSize: CssVarsThemeOptions['fontSize'] = {
  xs: '0.625rem', // 10px
  sm: '0.75rem', // 12px
  md: '0.875rem', // 14px
  lg: '1rem', // 16px
  xl: '1.25rem', // 20px
  xl2: '1.5rem', // 24px
  xl3: '1.75rem', // 28px
};
