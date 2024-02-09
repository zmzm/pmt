import { Components, Theme } from '@mui/joy';

export const JoyLink: Components<Theme>['JoyLink'] = {
  styleOverrides: {
    root: ({ theme, ownerState, 'aria-pressed': pressed = 'false' }) => ({
      ...(ownerState.color === 'neutral' && {
        color: theme.vars.palette.text.primary,
        textDecorationColor: theme.vars.palette.primary.plainColor,

        '&:hover': {
          color: theme.vars.palette.primary.plainColor,
        },

        '&:active': {
          color: theme.vars.palette.primary.plainActiveColor,
          textDecorationColor: theme.vars.palette.primary.plainActiveColor,
        },

        ...(pressed === 'true' && {
          color: theme.vars.palette.primary.plainActiveColor,
          textDecorationColor: theme.vars.palette.primary.plainActiveColor,
        }),
      }),
    }),
  },
};
