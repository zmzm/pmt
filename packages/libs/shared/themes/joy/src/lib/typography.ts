import { CssVarsThemeOptions } from '@mui/joy';

declare module '@mui/joy/styles' {
  interface TypographySystem {
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    'title-lg': false;
    'title-md': false;
    'title-sm': false;
  }
}

// See: https://mui.com/joy-ui/customization/theme-typography
export const typography: CssVarsThemeOptions['typography'] = {
  h1: {
    fontSize: 'var(--joy-fontSize-xl3)',
    fontWeight: 'var(--joy-fontWeight-lg)',
    lineHeight: 'var(--joy-lineHeight-lg)',
    color: 'var(--joy-palette-text-primary)',
  },
  h2: {
    fontSize: 'var(--joy-fontSize-xl)',
    fontWeight: 'var(--joy-fontWeight-lg)',
    lineHeight: 'var(--joy-lineHeight-lg)',
    color: 'var(--joy-palette-text-primary)',
  },
  h3: undefined,
  h4: undefined,
  h5: undefined,
  h6: undefined,
  'body-lg': {
    fontSize: 'var(--joy-fontSize-lg)',
    fontWeight: 'var(--joy-fontWeight-md)',
    lineHeight: 'var(--joy-lineHeight-lg)',
    color: 'var(--joy-palette-text-secondary)',
  },
  'body-md': {
    fontSize: 'var(--joy-fontSize-md)',
    fontWeight: 'var(--joy-fontWeight-md)',
    lineHeight: 'var(--joy-lineHeight-md)',
    color: 'var(--joy-palette-text-secondary)',
  },
  'body-sm': {
    fontSize: 'var(--joy-fontSize-sm)',
    fontWeight: 'var(--joy-fontWeight-md)',
    lineHeight: 'var(--joy-lineHeight-sm)',
    color: 'var(--joy-palette-text-secondary)',
  },
  'body-xs': {
    fontSize: 'var(--joy-fontSize-xs)',
    fontWeight: 'var(--joy-fontWeight-md)',
    lineHeight: 'var(--joy-lineHeight-sm)',
    color: 'var(--joy-palette-text-secondary)',
  },
};
