import { Slider } from './slider';

import type { Meta } from '@storybook/react';

const Story: Meta<typeof Slider> = {
  component: Slider,
  title: 'Inputs/Slider',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Slider component is ideal for interface controls that benefit from a visual representation of' +
          ' adjustable content.',
      },
    },
  },
};
export default Story;

export const Primary = {
  args: {},
};
