import { Input } from './input';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Inputs/Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The Input component facilitates the entry of text data from the user.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  render: (args) => <Input {...args} />,
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: 'Default State',
      },
    },
    backgrounds: {},
  },
};
