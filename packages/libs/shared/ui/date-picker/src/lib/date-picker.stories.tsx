import { Meta, StoryObj } from '@storybook/react';

import { DatePickerProps } from '../types/types';

import { DatePicker } from './date-picker';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Inputs/DatePicker',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Range Picker allows you to pick date range',
      },
    },
  },
};

const datePickerProps: DatePickerProps = {
  date: new Date(),
  onChange: (selectedDate) => console.log(selectedDate),
};

export default meta;

export const Primary: StoryObj<typeof DatePicker> = {
  render: () => <DatePicker {...datePickerProps} />,
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
      description: {
        story: 'Default State',
      },
    },
  },
};
