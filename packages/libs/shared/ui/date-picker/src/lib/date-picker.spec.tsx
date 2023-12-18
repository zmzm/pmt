import '@task-flow/shared/test-utils/mocks';
import { fireEvent, screen, render } from '@testing-library/react';

import { DatePicker } from './date-picker';

const currentDate = new Date(2023, 11, 6);
const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
beforeEach(() => {
  render(<DatePicker onChange={jest.fn} date={currentDate} />);
});

describe('DatePicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DatePicker onChange={jest.fn} />);

    expect(baseElement).toBeTruthy();
  });

  it('should open popover with date picker', () => {
    const datePickerInput = screen.getByRole('textbox');

    fireEvent.click(datePickerInput);

    expect(
      screen.getByText(new RegExp(`${currentMonth}`, 'i'))
    ).toBeInTheDocument();
  });

  it('should display default date', () => {
    const datePickerInput = screen.getByRole('textbox') as HTMLInputElement;

    expect(datePickerInput.value).toBe('2023-12-06');
  });

  it('should set date', () => {
    const datePickerInput = screen.getByRole('textbox') as HTMLInputElement;

    fireEvent.click(datePickerInput);

    const day = screen.getByText(21);

    fireEvent.click(day);

    expect(datePickerInput.value).toBe('2023-12-21');
  });
});
