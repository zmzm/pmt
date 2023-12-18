import JoyMenuList, { MenuListProps } from '@mui/joy/MenuList';

export const MenuList = ({ children, ...rest }: MenuListProps) => (
  <JoyMenuList {...rest}>{children}</JoyMenuList>
);
