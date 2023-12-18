import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';

export const Drawer = ({ children, ...rest }: DrawerProps) => (
  <MuiDrawer {...rest}>{children}</MuiDrawer>
);
