import JoyAlert, { AlertProps } from '@mui/joy/Alert';

export const Alert = ({ children, ...rest }: AlertProps) => (
  <JoyAlert {...rest}>{children}</JoyAlert>
);
