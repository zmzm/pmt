import { forwardRef } from 'react';
import JoyListItemButton, {
  ListItemButtonProps as JoyListItemButtonProps,
} from '@mui/joy/ListItemButton';

export interface ListItemButtonProps extends JoyListItemButtonProps {
  href?: string;
  active?: boolean;
}

export const ListItemButton = forwardRef<null, ListItemButtonProps>(
  ({ active, ...rest }: ListItemButtonProps, ref) => (
    <JoyListItemButton
      ref={ref}
      className={active ? 'active' : undefined}
      {...rest}
    />
  )
);
