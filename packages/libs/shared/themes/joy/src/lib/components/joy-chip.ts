import { Components, Theme } from '@mui/joy';

declare module '@mui/joy/Chip' {
  interface ChipPropsColorOverrides {
    secondary: true;
    tertiary: true;
    black: true;
  }
}

export const JoyChip: Components<Theme>['JoyChip'] = {
  defaultProps: {
    variant: 'solid',
    size: 'md',
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const hasClick = !!ownerState.onClick;
      const isLink = !!ownerState['to'];
      const isClickable = hasClick || isLink;
      const isUnderlined = !!ownerState['underlined'];
      const line = ownerState['disabled']
        ? `${theme.spacing(1)} solid ${theme.vars.palette.neutral.solidBg}`
        : `${theme.spacing(1)} solid ${
            ownerState['colorCode'] || theme.vars.palette.neutral.solidBg
          }`;

      return {
        borderRadius: theme.vars.radius[ownerState.size || 'sm'],
        rowGap: theme.spacing(1.5),
        columnGap: theme.spacing(1.5),
        ...(ownerState.size === 'md' && {
          padding: ownerState.component
            ? `${theme.spacing(0.5, 3)} !important`
            : theme.spacing(0.5, 3),
        }),
        ...(ownerState.size === 'lg' && {
          fontSize: theme.fontSize.lg,
          padding: theme.spacing(1, 4),
        }),
        ...(ownerState.color === 'black' && {
          color: theme.vars.palette.common.white,
          backgroundColor: theme.vars.palette.common.black,
        }),
        ...(ownerState.variant === 'plain' && {
          boxShadow: theme.shadow.md,
          color: theme.vars.palette.text.primary,
        }),
        ...(ownerState.variant === 'outlined' && {
          color: theme.vars.palette.neutral.plainColor,
        }),

        ...(ownerState.variant === 'soft' &&
          ownerState.color === 'primary' && {
            color: theme.vars.palette.primary.mainChannel,
            svg: {
              color: theme.vars.palette.primary.mainChannel,
            },
          }),

        ...(isUnderlined && {
          ...(hasClick && {
            paddingBottom: theme.spacing(1.5),
            '& > button': {
              borderBottom: line,
            },
          }),
          ...(!hasClick && {
            borderBottom: line,
          }),
        }),

        ...(isClickable && {
          '&:hover': {
            background: `var(--joy-palette-${ownerState.color || 'secondary'}-${
              ownerState.variant === 'plain' ? 'outlined' : ownerState.variant
            }HoverBg)`,
            color: `var(--joy-palette-${ownerState.color || 'secondary'}-${
              ownerState.variant
            }HoverColor)`,
          },
          '&:active': {
            boxShadow: theme.shadow.md.replace(/,/g, ', inset'),
          },
        }),

        ...(ownerState['disabled'] && {
          boxShadow: 'none !important',
        }),
      };
    },
  },
};
