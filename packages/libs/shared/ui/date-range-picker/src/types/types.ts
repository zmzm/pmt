export type SelectedRange = [Date | null, Date | null];
export type DateRangePickerProps = {
  ranges: {
    title: string;
    value: number;
  }[];
  dates?: SelectedRange;
  minDate?: Date;
  maxDate?: Date;
  onChange: (selectedRange: SelectedRange) => void;
  dateFormat?: string;
};
