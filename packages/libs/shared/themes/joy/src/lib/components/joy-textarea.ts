import { Components, Theme } from '@mui/joy';
import { textareaClasses } from '@mui/joy/Textarea';

export const JoyTextarea: Components<Theme>['JoyTextarea'] = {
  styleOverrides: {
    root: ({ theme }) => {
      return {
        borderRadius: theme.vars.radius.md,
        '&::before': {
          display: 'none',
        },

        [`&.${textareaClasses.colorPrimary}.${textareaClasses.variantSoft}`]: {
          '&::placeholder': {
            color: theme.palette.neutral.plainColor,
          },
          color: theme.palette.text.primary,
        },
      };
    },
  },
};
