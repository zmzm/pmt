import React from 'react';

import { Textarea } from './textarea';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Inputs/Textarea',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Textarea component gives you a textarea HTML element that automatically adjusts its height to match the length of the content within.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {
  render: (args) => <Textarea {...args} />,
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: 'Default State',
      },
    },
  },
};
