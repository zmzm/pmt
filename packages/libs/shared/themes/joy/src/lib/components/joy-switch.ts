import { Components } from '@mui/joy';

export const JoySwitch: Components['JoySwitch'] = {
  defaultProps: {
    size: 'lg',
  },
  styleOverrides: {
    thumb: {
      transition: 'width 0.2s, left 0.2s',
      borderRadius: '50%',
    },
  },
};
