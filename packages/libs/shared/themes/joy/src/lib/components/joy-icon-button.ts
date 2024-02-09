import { Components, Theme } from '@mui/joy';

declare module '@mui/joy/IconButton' {
  interface IconButtonPropsColorOverrides {
    deepBlue: true;
  }
}

export const JoyIconButton: Components<Theme>['JoyIconButton'] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      ...(ownerState.variant === 'solid' &&
        ownerState.color === 'deepBlue' && {
          color: theme.vars.palette.common.white,
          backgroundColor: theme.vars.palette.primary[700],
        }),
    }),
  },
};
