import { CssVarsThemeOptions, colors as JoyColors } from '@mui/joy';
import { colors } from './colors';

declare module '@mui/joy/styles' {
  interface PaletteRange {
    outlinedBorderSecondary: string;
    outlinedBorderTertiary: string;
    plainActiveColor: string;
    outlinedBg: string;
  }
}

const common = {
  white: '#FFF',
  black: '#000',
};

export const colorSchemes: CssVarsThemeOptions['colorSchemes'] = {
  light: {
    palette: {
      primary: {
        ...colors.blue,
        solidColor: 'var(--joy-palette-common-white)',
        solidBg: 'var(--joy-palette-primary-500)',
        solidHoverBg: 'var(--joy-palette-primary-600)',
        solidHoverColor: 'var(--joy-palette-common-white)',
        solidActiveBg: 'var(--joy-palette-primary-600)',
        solidDisabledColor: 'var(--joy-palette-neutral-300)',
        solidDisabledBg: 'var(--joy-palette-neutral-100)',
        softColor: 'var(--joy-palette-primary-500)',
        softBg: 'var(--joy-palette-primary-50)',
        softHoverBg: 'var(--joy-palette-primary-500)',
        softHoverColor: 'var(--joy-palette-common-white)',
        softActiveColor: 'var(--joy-palette-common-white)',
        softActiveBg: 'var(--joy-palette-primary-600)',
        softDisabledColor: 'var(--joy-palette-neutral-300)',
        softDisabledBg: 'var(--joy-palette-neutral-100)',
        outlinedColor: 'var(--joy-palette-primary-500)',
        outlinedBorder: 'var(--joy-palette-primary-500)',
        outlinedBorderSecondary: 'var(--joy-palette-primary-200)',
        outlinedBg: 'var(--joy-palette-common-white)',
        outlinedHoverBg: 'var(--joy-palette-primary-500)',
        outlinedHoverBorder: 'var(--joy-palette-primary-500)',
        outlinedHoverColor: 'var(--joy-palette-common-white)',
        outlinedActiveBg: 'var(--joy-palette-primary-600)',
        outlinedActiveColor: 'var(--joy-palette-common-white)',
        outlinedDisabledBg: 'var(--joy-palette-neutral-100)',
        outlinedDisabledColor: 'var(--joy-palette-neutral-300)',
        outlinedDisabledBorder: 'var(--joy-palette-neutral-100)',
        plainColor: 'var(--joy-palette-primary-500)',
        plainHoverBg: 'transparent',
        plainActiveBg: 'transparent',
        plainActiveColor: 'var(--joy-palette-primary-600)',
        plainDisabledColor: 'var(--joy-palette-neutral-300)',
      },
      neutral: {
        ...colors.gray,
        solidDisabledColor: 'var(--joy-palette-neutral-300)',
        solidHoverColor: 'var(--joy-palette-common-white)',
        plainColor: 'var(--joy-palette-neutral-600)',
        plainDisabledColor: 'var(--joy-palette-neutral-300)',
        outlinedColor: 'var(--joy-palette-primary-900)',
        outlinedDisabledColor: 'var(--joy-palette-neutral-300)',
        outlinedBg: 'var(--joy-palette-common-white)',
        outlinedDisabledBg: 'var(--joy-palette-neutral-100)',
        outlinedDisabledBorder: 'var(--joy-palette-neutral-100)',
        softDisabledColor: 'var(--joy-palette-neutral-300)',
        softBg: 'var(--joy-palette-primary-50)',
        plainHoverBg: 'transparent',
        plainActiveBg: 'transparent',
      },
      success: {
        ...colors.green,
      },
      warning: {
        ...colors.yellow,
        solidBg: 'var(--joy-palette-warning-200)',
        solidColor: 'var(--joy-palette-primary-800)',
      },
      danger: {
        ...JoyColors.red,
        solidColor: 'var(--joy-palette-common-white)',
        solidBg: 'var(--joy-palette-danger-400)',
        solidHoverBg: 'var(--joy-palette-danger-500)',
        solidHoverColor: 'var(--joy-palette-common-white)',
        solidActiveBg: 'var(--joy-palette-danger-600)',
        solidDisabledColor: 'var(--joy-palette-neutral-300)',
        softColor: 'var(--joy-palette-danger-400)',
        softBg: 'var(--joy-palette-danger-100)',
        softHoverBg: 'var(--joy-palette-danger-500)',
        softHoverColor: 'var(--joy-palette-common-white)',
        softActiveColor: 'var(--joy-palette-common-white)',
        softActiveBg: 'var(--joy-palette-danger-600)',
        softDisabledColor: 'var(--joy-palette-neutral-300)',
        softDisabledBg: 'var(--joy-palette-neutral-100)',
        outlinedColor: 'var(--joy-palette-danger-400)',
        outlinedBorder: 'var(--joy-palette-danger-400)',
        outlinedBorderSecondary: 'var(--joy-palette-danger-400)',
        outlinedBorderTertiary: 'var(--joy-palette-danger-400)',
        outlinedHoverBg: 'var(--joy-palette-danger-500)',
        outlinedHoverBorder: 'var(--joy-palette-danger-500)',
        outlinedHoverColor: 'var(--joy-palette-common-white)',
        outlinedActiveBg: 'var(--joy-palette-danger-600)',
        outlinedActiveColor: 'var(--joy-palette-common-white)',
        outlinedDisabledBg: 'var(--joy-palette-neutral-100)',
        outlinedDisabledColor: 'var(--joy-palette-neutral-300)',
        outlinedDisabledBorder: 'var(--joy-palette-neutral-100)',
        plainColor: 'var(--joy-palette-danger-400)',
        plainHoverColor: 'var(--joy-palette-danger-500)',
        plainHoverBg: 'transparent',
        plainActiveBg: 'transparent',
        plainActiveColor: 'var(--joy-palette-danger-600)',
        plainDisabledColor: 'var(--joy-palette-neutral-300)',
      },
      common,
      background: {
        body: 'var(--joy-palette-common-white)',
        surface: 'var(--joy-palette-common-white)',
        popup: 'var(--joy-palette-common-white)',
        level1: 'var(--joy-palette-primary-50)',
        level2: 'var(--joy-palette-primary-200)',
        level3: 'var(--joy-palette-primary-500)',
        tooltip: colors.gray[900],
        backdrop:
          'rgba(var(--joy-palette-neutral-darkChannel, 37 37 45) / 0.5)',
      },
      text: {
        primary: common.black,
        secondary: common.black,
        tertiary: colors.gray[600],
      },
      divider: 'var(--joy-palette-primary-200)',
    },
  },
};
