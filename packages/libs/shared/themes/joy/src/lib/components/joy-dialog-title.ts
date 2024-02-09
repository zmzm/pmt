import { Components, Theme } from '@mui/joy';

export const JoyDialogTitle: Components<Theme>['JoyDialogTitle'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      display: 'block',
      textAlign: 'center',
      lineHeight: theme.lineHeight.lg,
      fontSize: theme.fontSize.xl2,
      padding: theme.spacing(0, 10),
    }),
  },
};
