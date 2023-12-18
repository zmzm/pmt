import { IconButton } from '@task-flow/shared/ui/button';
import { Input } from '@task-flow/shared/ui/input';
import { ChangeEvent } from 'react';
import { Close as CloseIcon } from '@mui/icons-material';

interface NumericInputProps {
  value: number | string;
  min: number;
  max: number;
  placeholder: string;
  onClear?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function NumericInput({
  value,
  min,
  max,
  placeholder,
  onChange,
  onClear,
}: NumericInputProps) {
  return (
    <Input
      value={value}
      type="number"
      slotProps={{
        input: {
          min: min,
          max: max,
        },
      }}
      sx={{
        width: '100%',
      }}
      onChange={onChange}
      placeholder={placeholder}
      endDecorator={
        <IconButton
          color="neutral"
          variant="plain"
          onClick={onClear}
          sx={{
            opacity: 0.8,
            '&:hover': {
              backgroundColor: 'transparent',
              opacity: 1,
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      }
    />
  );
}
