import MuiCollapse, { CollapseProps } from '@mui/material/Collapse';

export const Collapse = ({ children, ...rest }: CollapseProps) => (
  <MuiCollapse {...rest}>{children}</MuiCollapse>
);
