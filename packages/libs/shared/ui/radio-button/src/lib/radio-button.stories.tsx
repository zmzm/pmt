import React from 'react';

import { RadioButton } from './radio-button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
  title: 'Inputs/RadioButton',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Radio buttons let users make a mutually exclusive choice (e.g., this or that). Only one selection is allowed from the available set of options.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Primary: Story = {
  render: (args) => <RadioButton {...args} />,
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: 'Default State',
      },
    },
  },
};
