import { Components, Theme } from '@mui/joy';

export const JoyTable: Components<Theme>['JoyTable'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.vars.palette.text.primary,
      borderColor: theme.vars.palette.primary.outlinedBorderTertiary,
      overflow: 'hidden',
      '& tbody': {
        backgroundColor: theme.vars.palette.background.surface,
      },
      '--TableCell-borderColor':
        theme.vars.palette.primary.outlinedBorderTertiary,
      '& thead th:not([colspan])': {
        borderBottom: 'none',
      },
      '--TableRow-hoverBackground': theme.vars.palette.background.level1,
    }),
  },
};
