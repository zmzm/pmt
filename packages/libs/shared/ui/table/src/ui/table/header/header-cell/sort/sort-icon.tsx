import { SvgIcon } from '@mui/joy';
import { ReactNode } from 'react';

export interface SortIconProps {
  active: boolean;
  children: ReactNode;
}

export function SortIcon({ children, active }: SortIconProps) {
  const size = active ? 14 : 12;
  return (
    <SvgIcon
      color="primary"
      viewBox="0 0 12 12"
      sx={{
        height: 14,
        width: size,
        color: (theme) =>
          active
            ? theme.vars.palette.primary.softColor
            : theme.vars.palette.neutral.plainColor,
      }}
    >
      {children}
    </SvgIcon>
  );
}
