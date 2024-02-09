import { Components, Theme } from '@mui/joy';

export const JoyCheckbox: Components<Theme>['JoyCheckbox'] = {
  defaultProps: {
    color: 'primary',
  },
  styleOverrides: {
    root: {
      alignItems: 'center',
    },
    checkbox: ({ theme, ownerState }) => ({
      borderRadius: theme.radius.xs,
      borderColor: `var(--joy-palette-${
        ownerState.color === 'primary' ? 'neutral' : ownerState.color
      }-solidBg)`,

      ...(!ownerState.disabled && {
        ...(ownerState.indeterminate && {
          backgroundColor: 'transparent',
          borderColor: `var(--joy-palette-${
            ownerState.color || 'primary'
          }-solidBg)`,
          borderStyle: 'solid',
          borderWidth: 1,
          svg: {
            fill: `var(--joy-palette-${ownerState.color || 'primary'}-solidBg)`,
          },
        }),

        '&:hover': {
          borderColor: `var(--joy-palette-${
            ownerState.color || 'primary'
          }-solidBg)`,
          backgroundColor:
            ownerState.checked && !ownerState.indeterminate
              ? `var(--joy-palette-${
                  ownerState.color || 'primary'
                }-solidActiveBg)`
              : 'transparent',
          '&+label': {
            color:
              ownerState.checked || ownerState.indeterminate
                ? `var(--joy-palette-${
                    ownerState.color || 'primary'
                  }-solidHoverBg)`
                : `var(--joy-palette-${ownerState.color || 'primary'}-solidBg)`,
          },

          ...(ownerState.indeterminate && {
            backgroundColor: 'transparent',
            borderColor: `var(--joy-palette-${
              ownerState.color || 'primary'
            }-solidActiveBg)`,
            borderStyle: 'solid',
            borderWidth: 1,
            svg: {
              fill: `var(--joy-palette-${
                ownerState.color || 'primary'
              }-solidActiveBg)`,
            },
          }),
        },
      }),

      ...(ownerState.disabled && {
        ...((ownerState.indeterminate || !ownerState.checked) && {
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: `${theme.palette.primary.solidDisabledColor} !important`,
        }),
      }),
    }),
    label: ({ theme, ownerState }) => ({
      marginInlineStart: theme.spacing(2),
      lineHeight: theme.vars.lineHeight[ownerState.size || 'md'],
      ...(!ownerState.disabled && {
        '&:hover': {
          color: theme.palette.primary.solidBg,
          backgroundColor: 'transparent',
        },
      }),
    }),
  },
};
