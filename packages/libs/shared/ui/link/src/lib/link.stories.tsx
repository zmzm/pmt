import { Link } from './link';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Navigation/Link',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `The Link component allows you to customize anchor tags with theme colors and typography styles.`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    level: 'h1',
    children: 'Link',
  },
};
