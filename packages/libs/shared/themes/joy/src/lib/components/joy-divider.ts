import { Components, Theme } from '@mui/joy';

export const JoyDivider: Components<Theme>['JoyDivider'] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      opacity: 1,

      ...(ownerState.orientation === 'horizontal' && {
        '--Divider-thickness': '2px',
      }),

      ...(ownerState.color === 'primary' && {
        '--Divider-lineColor': theme.vars.palette.primary.solidBg,
      }),
    }),
  },
};
