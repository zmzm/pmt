import JoyModalOverflow, { ModalOverflowProps } from '@mui/joy/ModalOverflow';

export const ModalOverflow = ({ children, ...rest }: ModalOverflowProps) => (
  <JoyModalOverflow {...rest}>{children}</JoyModalOverflow>
);
