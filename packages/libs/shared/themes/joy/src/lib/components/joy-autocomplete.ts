import { Components, Theme, autocompleteClasses } from '@mui/joy';

declare module '@mui/joy/Autocomplete' {
  interface AutocompletePropsColorOverrides {
    primary: false;
    warning: false;
    danger: false;
    success: false;
  }

  interface AutocompletePropsVariantOverrides {
    solid: false;
    soft: false;
    plain: false;
  }

  interface AutocompletePropsSizeOverrides {
    sm: false;
    large: false;
  }
}

export const JoyAutocomplete: Components<Theme>['JoyAutocomplete'] = {
  defaultProps: {
    variant: 'outlined',
    color: 'neutral',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      boxShadow: 'none',
      '&::before': {
        display: 'none',
      },

      borderRadius: theme.vars.radius[ownerState.size || 'md'],

      ...(ownerState.size === 'md' && {
        '--Input-gap': theme.spacing(2),
        '--Input-paddingInline': theme.spacing(4),
        minHeight: theme.spacing(10),
        fontSize: theme.vars.fontSize.lg,
      }),

      ...(ownerState.variant === 'outlined' &&
        ownerState.color === 'neutral' && {
          '--Input-placeholderColor':
            theme.vars.palette.neutral.outlinedDisabledColor,
          '--Input-placeholderOpacity': '100%',
          backgroundColor: theme.vars.palette.neutral.outlinedBg,
          borderColor: theme.vars.palette.primary.outlinedBorderTertiary,
          color: theme.vars.palette.neutral.outlinedColor,

          [`&.${autocompleteClasses.focused}`]: {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
          },
        }),

      [`&.${autocompleteClasses.colorDanger}`]: {
        '--Input-placeholderColor': theme.vars.palette.danger.softColor,
      },
    }),
    listbox: ({ theme }) => ({
      zIndex: theme.vars.zIndex.modal,
      border: 'none',
      '& li': {
        paddingTop: 0,
        paddingBottom: 0,
        minBlockSize: 32,
        '&:hover': {
          backgroundColor: `${theme.palette.neutral.outlinedDisabledBorder} !important`,
        },
      },
    }),
  },
};
