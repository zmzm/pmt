import { forwardRef } from 'react';
import JoyFormHelperText, {
  FormHelperTextProps,
} from '@mui/joy/FormHelperText';

export const FormHelperText = forwardRef<
  HTMLParagraphElement | null,
  FormHelperTextProps
>((props: FormHelperTextProps, ref) => (
  <JoyFormHelperText ref={ref} {...props} />
));
