import { Components, Theme } from '@mui/joy';

export const JoyDialogActions: Components<Theme>['JoyDialogActions'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      justifyContent: 'center',
      gap: theme.spacing(10),
      padding: theme.spacing(0, 10),
    }),
  },
};
