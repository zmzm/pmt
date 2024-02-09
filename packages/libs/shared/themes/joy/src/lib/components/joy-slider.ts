import { Components, Theme } from '@mui/joy';
import { sliderClasses } from '@mui/joy/Slider';

export const JoySlider: Components<Theme>['JoySlider'] = {
  defaultProps: {
    size: 'sm',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      '&:hover': {
        [`.${sliderClasses.thumb}`]: {
          background: theme.palette.primary.solidHoverBg,
        },
      },
    }),
    thumb: ({ theme }) => ({
      background: theme.palette.primary.solidBg,
      outline: 'none !important',
    }),
  },
};
