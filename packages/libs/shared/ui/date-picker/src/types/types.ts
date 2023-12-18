import { SelectedDate } from '@task-flow/shared/core/calendar/types';

export type DatePickerProps = {
  date?: SelectedDate;
  onChange: (selectedDate: SelectedDate) => void;
};
