import { Components, Theme } from '@mui/joy';

export const JoyDialogContent: Components<Theme>['JoyDialogContent'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0, 10),
    }),
  },
};
