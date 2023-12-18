import { forwardRef } from 'react';
import JoyMenuButton, {
  MenuButtonProps as JoyMenuButtonProps,
} from '@mui/joy/MenuButton';
import { Skeleton } from '@task-flow/shared/ui/skeleton';

interface MenuButtonProps extends JoyMenuButtonProps {
  skeleton?: boolean;
}

export const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ children, skeleton, ...rest }: MenuButtonProps, ref) =>
    skeleton ? (
      <JoyMenuButton ref={ref} {...rest} disabled loading={false}>
        {children}
        <Skeleton overlay />
      </JoyMenuButton>
    ) : (
      <JoyMenuButton ref={ref} {...rest}>
        {children}
      </JoyMenuButton>
    )
);
