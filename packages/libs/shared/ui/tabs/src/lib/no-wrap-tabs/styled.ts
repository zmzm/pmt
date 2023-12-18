import JoyTabs from '@mui/joy/Tabs';
import { tabListClasses } from '@mui/joy/TabList';
import { tabClasses } from '@mui/joy/Tab';
import Button from '@mui/joy/Button';
import { badgeClasses } from '@mui/joy/Badge';
import { styled } from '@mui/joy';

export const HorizonalTabs = styled(JoyTabs)(({ theme }) => ({
  [`& .${tabListClasses.root}`]: {
    width: '100%',
    overflow: 'auto',
    scrollSnapType: 'x mandatory',
    '&::-webkit-scrollbar': { display: 'none' },
    flexWrap: 'nowrap',
    flex: 1,
    position: 'relative',
    textOverflow: 'ellipsis',
    [`& .${badgeClasses.anchorOriginTopRight}`]: {
      top: theme.spacing(1),
      right: theme.spacing(-1),
    },
  },
  [`& .${tabClasses.root}`]: {
    flex: 'none',
    scrollSnapAlign: 'start',
  },
}));

export const ArrowButton = styled(Button)(({ theme }) => ({
  width: 32,
  padding: theme.spacing(2),
  '&:disabled': {
    backgroundColor: 'transparent',
    borderColor: theme.palette.neutral.outlinedDisabledColor,
    color: theme.palette.neutral.outlinedDisabledColor,
  },
}));
