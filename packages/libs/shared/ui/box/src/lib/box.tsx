import { forwardRef } from 'react';
import JoyBox, { BoxProps } from '@mui/joy/Box';

export const Box = forwardRef<HTMLElement, BoxProps>((props: BoxProps, ref) => (
  <JoyBox {...props} ref={ref} />
));
