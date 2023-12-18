import { forwardRef } from 'react';
import JoyListItem, {
  ListItemProps as JoyListItemProps,
} from '@mui/joy/ListItem';

export type ListItemProps = JoyListItemProps;

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  (props: ListItemProps, ref: React.ForwardedRef<HTMLLIElement>) => (
    <JoyListItem {...props} ref={ref} />
  )
);
