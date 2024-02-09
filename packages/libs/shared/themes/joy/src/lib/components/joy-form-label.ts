import { Components, Theme } from '@mui/joy';
import { formLabelClasses } from '@mui/joy/FormLabel';

export const JoyFormLabel: Components<Theme>['JoyFormLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography['body-md'],
      [`.${formLabelClasses.asterisk}`]: {
        color: 'inherit',
      },
    }),
  },
};
