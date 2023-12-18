import JoyModalClose, { ModalCloseProps } from '@mui/joy/ModalClose';
import Button from '@mui/joy/Button';
import { Close } from '@mui/icons-material';

const ModalCloseIcon = (props: ModalCloseProps) => {
  return (
    <Button variant="plain" {...props}>
      <Close />
    </Button>
  );
};

export const ModalClose = (props: ModalCloseProps) => (
  <JoyModalClose component={ModalCloseIcon} {...props} />
);
