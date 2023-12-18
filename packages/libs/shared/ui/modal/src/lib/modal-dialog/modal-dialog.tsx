import { forwardRef } from 'react';
import JoyModalDialog, { ModalDialogProps } from '@mui/joy/ModalDialog';

export const ModalDialog = forwardRef<HTMLDivElement, ModalDialogProps>(
  ({ children, ...rest }: ModalDialogProps, ref) => (
    <JoyModalDialog ref={ref} {...rest}>
      {children}
    </JoyModalDialog>
  )
);
