import { Loader } from './loader';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'Feedback/Loader',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `The Loader component showcases the duration of a process or an indefinite wait period.`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
  args: {},
};
