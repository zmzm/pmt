import MuiPopover, { PopoverProps } from '@mui/material/Popover';

export const Popover = ({ children, ...rest }: PopoverProps) => (
  <MuiPopover {...rest}>{children}</MuiPopover>
);
