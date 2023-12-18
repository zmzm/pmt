import JoyFormControl, { FormControlProps } from '@mui/joy/FormControl';
import { forwardRef } from 'react';

export const FormControl = forwardRef<HTMLDivElement | null, FormControlProps>(
  (props: FormControlProps, ref) => <JoyFormControl ref={ref} {...props} />
);
