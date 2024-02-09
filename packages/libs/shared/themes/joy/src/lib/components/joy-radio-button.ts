import { Components, Theme } from '@mui/joy';
import { radioClasses } from '@mui/joy/Radio';

export const JoyRadio: Components<Theme>['JoyRadio'] = {
  defaultProps: {
    variant: 'outlined',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      [`.${radioClasses.radio}:not(.${radioClasses.checked})`]: {
        backgroundColor: theme.vars.palette.common.white,
      },
      [`.${radioClasses.radio}:hover:not(.${radioClasses.checked})`]: {
        backgroundColor: theme.vars.palette.neutral.softBg,
      },
    }),
  },
};
