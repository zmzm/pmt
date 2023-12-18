import { forwardRef } from 'react';
import JoyList, { ListProps as JoyListProps } from '@mui/joy/List';

export type ListProps = JoyListProps;

export const List = forwardRef<HTMLUListElement, ListProps>(
  (props: ListProps, ref: React.ForwardedRef<HTMLUListElement>) => (
    <JoyList {...props} ref={ref} />
  )
);
