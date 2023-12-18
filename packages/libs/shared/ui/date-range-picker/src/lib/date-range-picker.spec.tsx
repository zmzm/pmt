import { screen, fireEvent, render } from '@testing-library/react';
import { format } from 'date-fns';
import '@testing-library/jest-dom';

import { DateRangePicker } from './date-range-picker';

const ranges = [
  {
    title: '1 yr',
    value: 1,
  },
  {
    title: '3 yr',
    value: 1,
  },
  {
    title: '5 yt',
    value: 5,
  },
  {
    title: 'Custom',
    value: 0,
  },
];

const fromDay = 10;
const untilDay = 25;
const minDay = new Date(2023, 11, 6);
const maxDay = new Date(2023, 11, 26);

const createStringDate = (day: number) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  return format(new Date(currentYear, currentMonth, day), 'dd-MM-yyyy');
};

let datePickerInput: HTMLElement;

beforeEach(() => {
  render(
    <DateRangePicker
      ranges={ranges}
      dates={[minDay, maxDay]}
      onChange={jest.fn}
      minDate={minDay}
      maxDate={maxDay}
    />
  );
  datePickerInput = screen.getByRole('textbox');
});
describe('RangePicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DateRangePicker ranges={ranges} onChange={jest.fn} />
    );

    expect(baseElement).toBeTruthy();
  });

  it('should have correct number of tabs', () => {
    fireEvent.click(datePickerInput);
    const tabs = screen.getByRole('tablist');

    expect(tabs.children.length).toEqual(4);
  });

  it('calendar should be visible under Custom tab', () => {
    fireEvent.click(datePickerInput);
    const currentMonth = new Date().toLocaleString('default', {
      month: 'long',
    });

    expect(
      screen.getByText(new RegExp(`${currentMonth}`, 'i'))
    ).toBeInTheDocument();
  });

  it('should set from date in inputs', () => {
    fireEvent.click(datePickerInput);
    const from = screen.getByText(fromDay);
    const to = screen.getByText(untilDay);

    const fromDateInput = screen.getByLabelText('From') as HTMLInputElement;
    const untilDateInput = screen.getByLabelText('Until') as HTMLInputElement;

    const fromDate = createStringDate(fromDay);
    const untilDate = createStringDate(untilDay);

    fireEvent.click(from);
    fireEvent.click(to);

    expect(fromDateInput?.value).toBe(fromDate);
    expect(untilDateInput?.value).toBe(untilDate);
  });

  it('initial min date is set correctly', () => {
    fireEvent.click(datePickerInput);
    const fromDateInput = screen.getByLabelText('From') as HTMLInputElement;

    expect(fromDateInput?.value).toEqual('06-12-2023');
  });

  it('initial max date is set correctly', () => {
    fireEvent.click(datePickerInput);
    const untilDateInput = screen.getByLabelText('Until') as HTMLInputElement;

    expect(untilDateInput?.value).toEqual('26-12-2023');
  });
});
