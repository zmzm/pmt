import { Components, Theme } from '@mui/joy';

declare module '@mui/joy/Sheet' {
  interface SheetPropsColorOverrides {
    deepBlue: true;
  }
}

export const JoySheet: Components<Theme>['JoySheet'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      ...(ownerState.variant === 'outlined' &&
        ownerState.color === 'primary' && {
          borderColor: theme.vars.palette.primary.outlinedBorderTertiary,
        }),
    }),
  },
};
