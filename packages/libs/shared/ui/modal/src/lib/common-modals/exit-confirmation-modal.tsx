import { Button } from '@task-flow/shared/ui/button';

import { Modal } from '../modal/modal';
import { ModalDialog } from '../modal-dialog/modal-dialog';
import { ModalClose } from '../modal-close/modal-close';
import { DialogDescription } from '../dialog-description/dialog-description';
import { DialogTitle } from '../dialog-title/dialog-title';
import { DialogActions } from '../dialog-actions/dialog-actions';

interface ExitConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  onCancel: () => void;
  onSave: () => void;
  width?: number;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
}

export const ExitConfirmationModal = ({
  open,
  onClose,
  onCancel,
  onSave,
  width = 386,
  title = 'Save changes?',
  description = ' You are about to exit without saving changes',
  confirmText = 'Yes, Save',
  cancelText = 'No, thanks',
}: ExitConfirmationModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog
        aria-labelledby="basic-modal-dialog-title"
        aria-describedby="basic-modal-dialog-description"
        size="md"
      >
        <ModalClose />
        <DialogTitle sx={{ minWidth: width }}>
          {title}
          {description && (
            <DialogDescription id="basic-modal-dialog-description">
              {description}
            </DialogDescription>
          )}
        </DialogTitle>
        <DialogActions>
          <Button color="primary" onClick={onSave}>
            {confirmText}
          </Button>
          <Button variant="outlined" onClick={onCancel}>
            {cancelText}
          </Button>
        </DialogActions>
      </ModalDialog>
    </Modal>
  );
};
