import { Components, Theme, inputClasses } from '@mui/joy';

declare module '@mui/joy/Input' {
  interface InputPropsColorOverrides {
    primary: false;
    warning: false;
    danger: false;
    success: false;
  }

  interface InputPropsVariantOverrides {
    solid: false;
    soft: false;
    plain: false;
  }

  interface InputPropsSizeOverrides {
    sm: false;
    lg: false;
  }
}

export const JoyInput: Components<Theme>['JoyInput'] = {
  defaultProps: {
    color: 'neutral',
    variant: 'outlined',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      return {
        boxShadow: 'none',
        '&::before': {
          display: 'none',
        },

        borderRadius: theme.vars.radius[ownerState.size || 'md'],

        ...(ownerState.size === 'md' && {
          '--Input-gap': theme.spacing(2),
          '--Input-paddingInline': theme.spacing(4),
          minHeight: theme.spacing(8),
          maxHeight: theme.spacing(8),
          fontSize: theme.vars.fontSize.lg,
        }),

        ...(ownerState.variant === 'outlined' &&
          ownerState.color === 'neutral' && {
            '--Input-placeholderColor':
              theme.vars.palette.primary.outlinedBorderTertiary,
            '--Input-placeholderOpacity': '100%',
            backgroundColor: theme.vars.palette.neutral.outlinedBg,
            borderColor: theme.vars.palette.primary.outlinedBorderTertiary,
            color: theme.vars.palette.neutral.outlinedColor,

            [`&.${inputClasses.focused}`]: {
              borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            },
          }),

        ...(ownerState.variant === 'outlined' &&
          ownerState.error && {
            color: theme.vars.palette.danger.solidBg,
            '&:hover': {
              color: theme.vars.palette.danger.solidBg,
            },
          }),
      };
    },
  },
};
