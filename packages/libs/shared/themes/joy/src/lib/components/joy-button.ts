import { Components, Theme } from '@mui/joy';

export const JoyButton: Components<Theme>['JoyButton'] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      fontSize: theme.fontSize.lg,
      fontWeight: theme.fontWeight.md,
      boxShadow: 'none',
      textTransform: 'initial',
      whiteSpace: 'nowrap',
      '&:hover': {
        textDecoration: 'none',
        boxShadow: theme.vars.shadow.md,
      },
      '&:active': {
        boxShadow: theme.shadow.md.replace(/,/g, ', inset'),
      },
      '&.skeleton': {
        border: 'none',
      },

      ...(ownerState.variant === 'plain' && {
        boxShadow: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
        '&:active': {
          textDecoration: 'none',
        },
      }),

      ...(ownerState.size === 'sm' && {
        padding: theme.spacing(0, 3),
        borderRadius: theme.vars.radius.sm,
        maxHeight: theme.spacing(6),
        minHeight: theme.spacing(6),
      }),

      ...(ownerState.size === 'md' && {
        padding: theme.spacing(1, 4),
        borderRadius: theme.vars.radius.md,
        maxHeight: theme.spacing(8),
        minHeight: theme.spacing(8),
      }),

      ...(ownerState.size === 'lg' && {
        padding: theme.spacing(2.5, 5),
        borderRadius: theme.vars.radius.md,
        maxHeight: theme.spacing(11),
        minHeight: theme.spacing(11),
      }),
    }),
  },
};
