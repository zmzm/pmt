import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiToolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
    }),
  },
}));

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  [theme.breakpoints.up('sm')]: {
    minHeight: theme.spacing(6),
    paddingLeft: theme.spacing(2),
    paddingright: theme.spacing(2),
  },
}));
