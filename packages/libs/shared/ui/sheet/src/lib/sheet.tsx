import JoySheet, { SheetProps } from '@mui/joy/Sheet';
import { forwardRef } from 'react';

export const Sheet = forwardRef<HTMLDivElement, SheetProps>(
  (props: SheetProps, ref: React.ForwardedRef<HTMLDivElement>) => (
    <JoySheet {...props} ref={ref} />
  )
);
