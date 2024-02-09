import { Components, Theme } from '@mui/joy';

declare module '@mui/joy/Tabs' {
  interface TabsPropsColorOverrides {
    neutral: false;
    success: false;
    danger: false;
    warning: false;
  }

  interface TabsPropsVariantOverrides {
    outlined: false;
    solid: false;
  }
}

export const JoyTabs: Components<Theme>['JoyTabs'] = {
  defaultProps: {
    color: 'primary',
    variant: 'plain',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      '--Tab-indicatorThickness': theme.spacing(1),
      '--Tab-indicatorRadius': theme.vars.radius.sm,
      flexWrap: 'wrap',

      ...(ownerState.variant === 'soft' && {
        backgroundColor: theme.vars.palette.primary.softBg,
      }),
    }),
  },
};
