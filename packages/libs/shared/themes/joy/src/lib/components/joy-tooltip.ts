import { Components, Theme } from '@mui/joy';

export const JoyTooltip: Components<Theme>['JoyTooltip'] = {
  defaultProps: {
    variant: 'solid',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      padding: `${theme.spacing(1, 3, 1, 3)} !important`,
      ...(ownerState.variant === 'solid' && {
        backgroundColor: theme.vars.palette.background.tooltip,
      }),
    }),
    arrow: ({ theme, ownerState }) => ({
      ...(ownerState.variant === 'solid' && {
        '&::before': {
          borderTopColor: theme.vars.palette.background.tooltip,
          borderBottomColor: theme.vars.palette.background.tooltip,
          borderLeftColor: theme.vars.palette.background.tooltip,
          borderRightColor: theme.vars.palette.background.tooltip,
        },
      }),
    }),
  },
};
