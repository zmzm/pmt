import { Components, Theme } from '@mui/joy/styles';
import { optionClasses } from '@mui/joy/Option';

export const JoyOption: Components<Theme>['JoyOption'] = {
  styleOverrides: {
    root: ({ theme }) => {
      return {
        [`&.${optionClasses.selected}`]: {
          color: theme.vars.palette.primary.softColor,
          backgroundColor: theme.vars.palette.primary.softBg,
        },
      };
    },
  },
};
