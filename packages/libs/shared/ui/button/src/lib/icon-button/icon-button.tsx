import { forwardRef } from 'react';
import JoyIconButton, {
  IconButtonProps as JoyIconButtonProps,
} from '@mui/joy/IconButton';

export const IconButton = forwardRef<HTMLButtonElement, JoyIconButtonProps>(
  ({ children, ...rest }: JoyIconButtonProps, ref) => (
    <JoyIconButton ref={ref} {...rest}>
      {children}
    </JoyIconButton>
  )
);
