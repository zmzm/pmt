import { Box } from '@task-flow/shared/ui/box';
import { Typography } from '@task-flow/shared/ui/typography';
import { Button } from '@task-flow/shared/ui/button';
import { ColorPaletteProp } from '@mui/joy';
import React from 'react';
import {
  InfoOutlined,
  WarningOutlined,
  ReportOutlined,
  CheckCircleOutline,
  CloseRounded,
  Close,
} from '@mui/icons-material';
import IconButton from '@mui/joy/IconButton';

import { Alert } from './alert';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Feedback/Alert',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Alerts display brief messages for the user without interrupting their use of the app.`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Alert>;

const items: {
  title: string;
  color: ColorPaletteProp;
  icon: React.ReactElement;
}[] = [
  { title: 'Success', color: 'success', icon: <CheckCircleOutline /> },
  { title: 'Warning', color: 'warning', icon: <WarningOutlined /> },
  { title: 'Error', color: 'danger', icon: <ReportOutlined /> },
  { title: 'Info', color: 'primary', icon: <InfoOutlined /> },
];

export const Primary: Story = {
  render: (args) => (
    <Box sx={{ width: '100%' }}>
      <Alert color="primary" {...args}>
        This is a basic Alert.
      </Alert>
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: `The Alert component can be used to provide important and potentially time-sensitive information in a way that does not interfere with the user's tasks.`,
      },
    },
  },
};

export const Variants: Story = {
  render: (args) => (
    <Box
      sx={{ display: 'flex', gap: 2, width: '100%', flexDirection: 'column' }}
    >
      {items.map(({ title, color, icon }) => (
        <Alert
          key={title}
          sx={{ alignItems: 'flex-start' }}
          startDecorator={React.cloneElement(icon, {
            sx: { mt: '2px', mx: '4px' },
            fontSize: 'xl2',
          })}
          variant="soft"
          color={color}
          endDecorator={
            <IconButton variant="soft" size="sm" color={color}>
              <CloseRounded />
            </IconButton>
          }
          {...args}
        >
          <div>
            <Typography fontWeight="lg" mt={0.25}>
              {title}
            </Typography>
            <Typography fontSize="sm" sx={{ opacity: 0.8 }}>
              This is a time-sensitive {title} Alert.
            </Typography>
          </div>
        </Alert>
      ))}
      <Alert
        startDecorator={<WarningOutlined sx={{ mx: 0.5 }} />}
        variant="soft"
        color="danger"
        endDecorator={
          <>
            <Button variant="soft" color="danger" sx={{ mr: 1 }} label="Undo" />
            <IconButton variant="soft" size="sm" color="danger">
              <Close />
            </IconButton>
          </>
        }
      >
        <Typography color="danger" fontWeight="md">
          This file was successfully deleted
        </Typography>
      </Alert>
      <Alert
        startDecorator={<WarningOutlined sx={{ mx: 0.5 }} />}
        variant="solid"
        color="danger"
        endDecorator={
          <>
            <Button variant="soft" color="danger" sx={{ mr: 1 }} label="Undo" />
            <IconButton variant="solid" size="sm" color="danger">
              <Close />
            </IconButton>
          </>
        }
      >
        <Typography sx={{ color: 'white' }} fontWeight="md">
          This file was successfully deleted
        </Typography>
      </Alert>

      <Alert
        startDecorator={<WarningOutlined sx={{ mx: 0.5 }} />}
        variant="outlined"
        color="danger"
        endDecorator={
          <>
            <Button
              variant="plain"
              color="danger"
              sx={{ mr: 1 }}
              label="Undo"
            />
            <IconButton variant="soft" size="sm" color="danger">
              <Close />
            </IconButton>
          </>
        }
      >
        <Typography color="danger" fontWeight="md">
          This file was successfully deleted
        </Typography>
      </Alert>
    </Box>
  ),
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
    },
  },
};
