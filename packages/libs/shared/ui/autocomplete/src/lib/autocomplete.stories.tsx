import React from 'react';
import { Box } from '@task-flow/shared/ui/box';

import { Autocomplete } from './autocomplete';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Autocomplete> = {
  component: Autocomplete,
  title: 'Inputs/Autocomplete',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The autocomplete is a text input enhanced by a panel of suggested options when users start typing.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Autocomplete>;

export const Primary: Story = {
  render: (args) => (
    <Box sx={{ height: '300px' }}>
      <Autocomplete {...args} />
    </Box>
  ),
  args: {
    options: [
      { label: 'First Option' },
      { label: 'Second Option' },
      { label: 'Third Option' },
    ],
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: 'Default State',
      },
    },
  },
};
