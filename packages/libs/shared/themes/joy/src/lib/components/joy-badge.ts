import { Components } from '@mui/joy';
import { badgeClasses } from '@mui/joy/Badge';

export const JoyBadge: Components['JoyBadge'] = {
  defaultProps: {
    size: 'sm',
  },
  styleOverrides: {
    root: () => ({
      [`.${badgeClasses.variantSolid}`]: {
        boxShadow: 'none',
      },
    }),
  },
};
