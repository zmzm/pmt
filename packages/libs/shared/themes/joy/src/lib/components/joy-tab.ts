import { Components, Theme } from '@mui/joy';

export const JoyTab: Components<Theme>['JoyTab'] = {
  defaultProps: {
    color: 'primary',
    variant: 'plain',
    indicatorInset: true,
    tabIndex: -1,
    onKeyDown: (e) => {
      e.preventDefault();
      e.stopPropagation();
    },
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      whiteSpace: 'nowrap',
      ...theme.typography['body-lg'],

      ...(ownerState.variant === 'plain' &&
        ownerState.color === 'primary' && {
          '&:hover': {
            color: theme.vars.palette.primary.plainColor,
          },
        }),
      '&:focus, &:focus-within': {
        outline: 'none',
      },
    }),
  },
};
