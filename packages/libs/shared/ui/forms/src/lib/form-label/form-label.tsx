import JoyFormLabel, { FormLabelProps } from '@mui/joy/FormLabel';
import { forwardRef } from 'react';

export const FormLabel = forwardRef<HTMLLabelElement | null, FormLabelProps>(
  (props: FormLabelProps, ref) => <JoyFormLabel ref={ref} {...props} />
);
