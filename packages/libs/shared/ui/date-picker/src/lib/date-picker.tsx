import { Input } from '@task-flow/shared/ui/input';
import { Popover } from '@task-flow/shared/ui/popover';
import React, { useState } from 'react';
import { Stack } from '@task-flow/shared/ui/stack';
import { SelectedDate } from '@task-flow/shared/core/calendar/types';
import { format } from 'date-fns';
import { CustomCalendar } from '@task-flow/shared/ui/calendar';

import { DatePickerProps } from '../types/types';

export const DatePicker = ({ date = null, onChange }: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<SelectedDate>(date);
  const [anchorEl, setAnchorEl] = useState<HTMLInputElement | null>(null);
  const isOpen = Boolean(anchorEl);
  const formattedDate = selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '';

  const handleInputClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setAnchorEl(null);
    onChange(date);
  };

  return (
    <>
      <Input
        readOnly
        value={formattedDate}
        onClick={handleInputClick}
        placeholder="Select date"
      />
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Stack>
          <CustomCalendar
            value={selectedDate}
            onChange={(value) => handleDateChange(value as Date)}
          />
        </Stack>
      </Popover>
    </>
  );
};
