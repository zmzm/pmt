import { Components, Theme } from '@mui/joy';

export const JoyListItemButton: Components<Theme>['JoyListItemButton'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      ...(ownerState.variant === 'plain' && {
        '&:hover': {
          textDecoration: 'underline',
        },
        '&:active, &.active': {
          backgroundColor: `var(--variant-plainActiveBg, var(--joy-palette-${ownerState.color}-plainActiveBg))`,
          color: `var(--variant-plainActiveColor, var(--joy-palette-${ownerState.color}-plainActiveColor))`,
        },
        '&:active': {
          textDecoration: 'none',
        },
      }),
    }),
  },
};
