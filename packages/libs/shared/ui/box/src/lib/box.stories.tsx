import { Box } from './box';

import type { Meta } from '@storybook/react';

const Story: Meta<typeof Box> = {
  component: Box,
  title: 'Layout/Box',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The Box component serves as a wrapper component for most of the CSS utility needs.',
      },
    },
  },
};
export default Story;

export const Primary = {
  args: {
    component: 'span',
    children: <>I am a span with sx prop</>,
    mx: 10, // system prop: margin horizontal
    sx: {
      p: 10, // sx prop: padding
    },
  },
};
