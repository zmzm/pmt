import { Stack } from '@task-flow/shared/ui/stack';
import { List, ListItem } from '@task-flow/shared/ui/list';
import { Button } from '@task-flow/shared/ui/button';
import { Typography } from '@task-flow/shared/ui/typography';
import { Sheet } from '@task-flow/shared/ui/sheet';
import React from 'react';
import { ModalDialogProps, ModalProps } from '@mui/joy';

import { Modal } from './modal/modal';
import { ModalClose } from './modal-close/modal-close';
import { ModalDialog } from './modal-dialog/modal-dialog';
import { ModalOverflow } from './modal-overflow/modal-overflow';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Feedback/Modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Modal>;

function BasicModal(args: ModalProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
        label="Open modal"
      />
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        {...{
          ...args,
          onClose: () => {
            setOpen(false);
          },
        }}
        open={open}
      >
        <div>
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 500,
              borderRadius: 'md',
              p: 3,
              boxShadow: 'lg',
            }}
          >
            <ModalClose
              variant="outlined"
              sx={{
                top: 'calc(-1/4 * var(--IconButton-size))',
                right: 'calc(-1/4 * var(--IconButton-size))',
                boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                borderRadius: '50%',
                bgcolor: 'background.body',
              }}
            />
            <Typography
              component="h1"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              mb={1}
            >
              This is the modal title
            </Typography>
            <Typography id="modal-desc" textColor="text.tertiary">
              Make sure to use <code>aria-labelledby</code> on the modal dialog
              with an optional <code>aria-describedby</code> attribute.
            </Typography>
          </Sheet>
        </div>
      </Modal>
    </>
  );
}

function VariantModalDialog() {
  const [variant, setVariant] = React.useState<
    ModalDialogProps['variant'] | undefined
  >(undefined);
  return (
    <>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Button
          variant="plain"
          color="neutral"
          onClick={() => {
            setVariant('plain');
          }}
          label="Plain"
        />
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            setVariant('outlined');
          }}
          label="Outlined"
        />
        <Button
          variant="soft"
          color="neutral"
          onClick={() => {
            setVariant('soft');
          }}
          label="Soft"
        />
        <Button
          variant="solid"
          color="neutral"
          onClick={() => {
            setVariant('solid');
          }}
          label="Solid"
        />
      </Stack>
      <Modal open={!!variant} onClose={() => setVariant(undefined)}>
        <ModalDialog
          aria-labelledby="variant-modal-title"
          aria-describedby="variant-modal-description"
          variant={variant}
        >
          <ModalClose />
          <Typography id="variant-modal-title" component="h1" level="inherit">
            Modal Dialog
          </Typography>
          <Typography id="variant-modal-description" textColor="inherit">
            This is a `{variant}` modal dialog.
          </Typography>
        </ModalDialog>
      </Modal>
    </>
  );
}

function LayoutModalDialog() {
  const [layout, setLayout] = React.useState<
    ModalDialogProps['layout'] | undefined
  >(undefined);
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            setLayout('center');
          }}
          label="Center"
        />
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            setLayout('fullscreen');
          }}
          label="Full screen"
        />
      </Stack>
      <Modal open={!!layout} onClose={() => setLayout(undefined)}>
        <ModalDialog
          aria-labelledby="layout-modal-title"
          aria-describedby="layout-modal-description"
          layout={layout}
        >
          <ModalClose />
          <Typography id="layout-modal-title" component="h1">
            Modal Dialog
          </Typography>
          <Typography id="layout-modal-description" textColor="text.tertiary">
            This is a <code>{layout}</code> modal dialog. Press <code>esc</code>{' '}
            to close it.
          </Typography>
        </ModalDialog>
      </Modal>
    </>
  );
}

function ModalDialogOverflow() {
  const [layout, setLayout] = React.useState<
    ModalDialogProps['layout'] | undefined
  >(undefined);
  return (
    <>
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            setLayout('center');
          }}
          label="Center"
        />
        <Button
          variant="outlined"
          color="neutral"
          onClick={() => {
            setLayout('fullscreen');
          }}
          label="Full screen"
        />
      </Stack>
      <Modal
        open={!!layout}
        onClose={() => {
          setLayout(undefined);
        }}
      >
        <ModalOverflow>
          <ModalDialog aria-labelledby="modal-dialog-overflow" layout={layout}>
            <ModalClose />
            <Typography id="modal-dialog-overflow" component="h1">
              Overflow content
            </Typography>
            <List>
              {[...Array(100)].map((item, index) => (
                <ListItem key={index}>Item number ({index})</ListItem>
              ))}
            </List>
          </ModalDialog>
        </ModalOverflow>
      </Modal>
    </>
  );
}

export const Primary: Story = {
  render: (args) => BasicModal(args),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `The Modal accepts only a single React element as a child. That can be either a Joy UI component, e.g. Sheet, or any other custom element.
        Use the Modal Close component to render a close button that inherits the modal's onClose function.`,
      },
    },
  },
};

export const Variants: Story = {
  render: () => VariantModalDialog(),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `The Modal Close component's variant adapts automatically to contrast with the Modal Dialog, as demonstrated below:`,
      },
    },
  },
};

export const Layout: Story = {
  render: () => LayoutModalDialog(),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `The Modal Dialog's layout can be:
        <b>center (default)</b>: the modal dialog appears at the center of the viewport;
        <b>fullScreen</b>: the modal dialog covers the whole viewport.`,
      },
    },
  },
};

export const Overflow: Story = {
  render: () => ModalDialogOverflow(),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `To make the whole modal scrollable, in case its higher than the viewport, use the Modal Overflow component. It will allow the Modal Dialog to vertically overflow the screen.
        The Modal Overflow supports both center and fullScreen built-in layouts.`,
      },
    },
  },
};
