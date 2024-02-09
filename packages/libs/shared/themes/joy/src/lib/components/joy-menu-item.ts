import { Components, Theme } from '@mui/joy';
import { listItemDecoratorClasses } from '@mui/joy/ListItemDecorator';

export const JoyMenuItem: Components<Theme>['JoyMenuItem'] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      gap: theme.spacing(2.5),
      color: theme.palette.primary.solidBg,
      svg: {
        fill: theme.palette.primary.solidBg,
      },
      fontSize: theme.vars.fontSize.lg,
      ...(ownerState.variant === 'soft' && {
        background: theme.palette.primary.softBg,
      }),
      '&:hover': {
        background: `${theme.palette.primary.solidBg} !important`,
        color: `${theme.palette.primary.solidColor} !important`,
        svg: {
          fill: `${theme.palette.primary.solidColor} !important`,
        },
      },
      [`& .${listItemDecoratorClasses.root}`]: {
        minInlineSize: theme.spacing(7.5),
        '& > svg': {
          width: theme.spacing(4),
          height: theme.spacing(4),
        },
      },
    }),
  },
};
