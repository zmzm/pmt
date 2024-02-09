import { Components, Theme } from '@mui/joy/styles';
import { selectClasses } from '@mui/joy/Select';

declare module '@mui/joy/Select' {
  interface SelectPropsSizeOverrides {
    sm: false;
    large: false;
  }
}

export const JoySelect: Components<Theme>['JoySelect'] = {
  defaultProps: {
    variant: 'outlined',
    color: 'neutral',
    size: 'md',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      boxShadow: 'none',
      minHeight: theme.spacing(10),
      borderRadius: theme.vars.radius[ownerState.size || 'md'],

      ...(ownerState.variant === 'outlined' &&
        ownerState.color === 'neutral' && {
          border: `1px solid ${theme.vars.palette.primary.outlinedBorderTertiary}`,
          '&:hover': {
            backgroundColor: theme.vars.palette.neutral.outlinedBg,
          },
          [`&.${selectClasses.expanded}`]: {
            border: `1px solid ${theme.vars.palette.primary.outlinedBorder}`,
          },
        }),
    }),
    listbox: ({ theme }) => ({
      border: 'none',
      zIndex: theme.vars.zIndex.modal,
      '& li': {
        paddingTop: 0,
        paddingBottom: 0,
        minBlockSize: 32,
      },
    }),
  },
};
