import { Components, Theme } from '@mui/joy';

export const JoyTabList: Components<Theme>['JoyTabList'] = {
  defaultProps: {
    disableUnderline: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      flexWrap: 'wrap',
      '--ListItem-paddingLeft': 0,
      '--ListItem-paddingRight': theme.spacing(5),
    }),
  },
};
