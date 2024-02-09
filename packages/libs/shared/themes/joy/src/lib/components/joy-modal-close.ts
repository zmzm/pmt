import { Components, Theme } from '@mui/joy';

export const JoyModalClose: Components<Theme>['JoyModalClose'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      top: theme.spacing(3.5),
      right: theme.spacing(3.5),
      '& svg': {
        width: 24,
        height: 24,
        color: theme.palette.neutral.plainColor,
        g: {
          strokeWidth: 1,
        },
      },

      '&:hover': {
        '& svg': {
          color: theme.palette.text.secondary,
        },
      },
    }),
  },
};
