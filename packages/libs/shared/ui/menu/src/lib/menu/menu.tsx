import { forwardRef } from 'react';
import JoyMenu, { MenuProps } from '@mui/joy/Menu';

declare module '@mui/joy/Menu' {
  interface MenuPropsVariantOverrides {
    solid: false;
    outlined: false;
  }

  interface MenuPropsColorOverrides {
    neutral: false;
    warning: false;
    danger: false;
    success: false;
  }
}

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ children, ...rest }: MenuProps, ref) => (
    <JoyMenu ref={ref} {...rest}>
      {children}
    </JoyMenu>
  )
);
