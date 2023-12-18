import { forwardRef } from 'react';
import JoyStack, { StackProps } from '@mui/joy/Stack';

// export const Stack = (props: StackProps) => <JoyStack {...props} />
export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (props: StackProps, ref: React.ForwardedRef<HTMLDivElement>) => (
    <JoyStack {...props} ref={ref} />
  )
);
