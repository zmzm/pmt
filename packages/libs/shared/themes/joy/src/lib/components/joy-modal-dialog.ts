import { Components, Theme } from '@mui/joy';

export const JoyModalDialog: Components<Theme>['JoyModalDialog'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      gap: theme.spacing(10),
      padding: theme.spacing(10, 0),
    }),
  },
};
