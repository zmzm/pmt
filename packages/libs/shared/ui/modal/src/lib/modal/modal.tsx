import JoyModal, { ModalProps } from '@mui/joy/Modal';

export const Modal = ({ children, ...rest }: ModalProps) => (
  <JoyModal {...rest}>{children}</JoyModal>
);
