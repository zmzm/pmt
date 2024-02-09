import { Components, Theme } from '@mui/joy';

export const JoyMenu: Components<Theme>['JoyMenu'] = {
  defaultProps: {
    variant: 'plain',
    color: 'primary',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      borderRadius: theme.radius.lg,
      ...(ownerState.variant === 'soft' && {
        background: theme.palette.primary.softBg,
      }),
    }),
  },
};
