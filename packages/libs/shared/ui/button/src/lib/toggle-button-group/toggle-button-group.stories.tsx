import { FavoriteBorder } from '@mui/icons-material';

import { ToggleButtonGroup } from './toggle-button-group';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ToggleButtonGroup> = {
  component: ToggleButtonGroup,
  title: 'Inputs/ToggleButtonGroup',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A group of mutually exclusive buttons.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ToggleButtonGroup>;

export const Primary: Story = {
  args: {
    children: <FavoriteBorder />,
  },
};
