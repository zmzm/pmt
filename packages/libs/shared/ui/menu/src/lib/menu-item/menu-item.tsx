import JoyMenuItem, { MenuItemProps } from '@mui/joy/MenuItem';

export const MenuItem = ({ children, ...rest }: MenuItemProps) => (
  <JoyMenuItem {...rest}>{children}</JoyMenuItem>
);
