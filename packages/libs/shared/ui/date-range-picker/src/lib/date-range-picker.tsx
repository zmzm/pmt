import React, { useState } from 'react';
import { Stack } from '@task-flow/shared/ui/stack';
import { Tabs, TabList, Tab, TabPanel } from '@task-flow/shared/ui/tabs';
import { Input } from '@task-flow/shared/ui/input';
import { styled } from '@mui/joy/styles';
import { Divider } from '@task-flow/shared/ui/divider';
import { Box } from '@task-flow/shared/ui/box';
import { Popover } from '@task-flow/shared/ui/popover';
import { compareAsc } from 'date-fns';
import { DateField } from '@mui/x-date-pickers';
import { CustomCalendar } from '@task-flow/shared/ui/calendar';

import { formatDate } from '../utils/format-date';
import { DateRangePickerProps, SelectedRange } from '../types/types';
import { INPUT_DATE_FORMAT } from '../constants/constants';

const InputWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2.5),
  marginBottom: theme.spacing(2.5),
}));

const DateInput = styled(DateField)(({ theme }) => ({
  width: 160,
  '& .MuiInputBase-input': {
    fontSize: theme.vars.fontSize.md,
    padding: theme.spacing(2.5, 4.5),
  },
}));

export const DateRangePicker = ({
  ranges,
  dates = [null, null],
  minDate,
  maxDate,
  onChange,
  dateFormat = 'yyyy/MM/dd',
}: DateRangePickerProps) => {
  const [selectedRange, setSelectedRange] = useState<SelectedRange>(dates);
  const [anchorEl, setAnchorEl] = useState<HTMLInputElement | null>(null);
  const [inputMinDate, setInputMinDate] = useState(minDate);
  const [inputMaxDate, setInputMaxDate] = useState(maxDate);
  const isOpen = Boolean(anchorEl);

  const handleRangeChange = (dates: SelectedRange) => {
    setSelectedRange(dates);
    setAnchorEl(null);
    onChange(dates);
  };

  const handleInputClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleInputChange = (date: Date, index: number) => {
    if (date instanceof Date && !isNaN(date.getTime())) {
      if (index === 0 && compareAsc(date, selectedRange[1] as Date) < 0) {
        setInputMinDate(date);
      } else {
        setInputMaxDate(date);
      }
      const tempSelectedRange: SelectedRange = [...selectedRange];
      tempSelectedRange[index] = date ? date : null;
      setSelectedRange(tempSelectedRange);
      onChange(tempSelectedRange);
    }
  };

  return (
    <>
      <Input
        readOnly
        value={`${formatDate(selectedRange[0], dateFormat)} - ${formatDate(
          selectedRange[1],
          dateFormat
        )}`}
        onClick={handleInputClick}
        sx={{ minHeight: 40 }}
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
        <Stack sx={{ display: 'inline-flex', minWidth: 350, padding: 5 }}>
          <Tabs defaultValue={ranges.length - 1} noWrap={false}>
            <TabList sx={{ justifyContent: 'center', mb: 2.5 }}>
              {ranges.map((range, index) => (
                <Box key={index}>
                  <Tab
                    disableIndicator
                    sx={{
                      textAlign: 'center',
                      padding: '0 15px',
                      borderRadius: 5,
                    }}
                  >
                    {range.title}
                  </Tab>
                  {ranges.length - 1 > index && (
                    <Divider orientation="vertical" />
                  )}
                </Box>
              ))}
            </TabList>
            <TabPanel value={ranges.length - 1} sx={{ padding: 0 }}>
              <CustomCalendar
                onChange={(dates) => handleRangeChange(dates as SelectedRange)}
                value={selectedRange}
                minDate={minDate}
                maxDate={maxDate}
                selectRange={true}
              />
              <Stack sx={{ mt: 3 }}>
                <InputWrapper>
                  <DateInput
                    value={selectedRange[0]}
                    label="From"
                    format={INPUT_DATE_FORMAT}
                    minDate={minDate}
                    maxDate={inputMaxDate}
                    onChange={(value) => handleInputChange(value as Date, 0)}
                  />
                </InputWrapper>
                <InputWrapper>
                  <DateInput
                    value={selectedRange[1]}
                    label="Until"
                    format={INPUT_DATE_FORMAT}
                    minDate={inputMinDate}
                    maxDate={maxDate}
                    onChange={(value) => handleInputChange(value as Date, 1)}
                  />
                </InputWrapper>
              </Stack>
            </TabPanel>
          </Tabs>
        </Stack>
      </Popover>
    </>
  );
};
