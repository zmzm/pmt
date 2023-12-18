import JoyDropdown, { DropdownProps } from '@mui/joy/Dropdown';

export const Dropdown = ({ children, ...rest }: DropdownProps) => (
  <JoyDropdown {...rest}>{children}</JoyDropdown>
);
