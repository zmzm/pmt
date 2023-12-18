import { IconButton } from '@task-flow/shared/ui/button';
import { Input } from '@task-flow/shared/ui/input';
import { ChangeEvent, useEffect, useState } from 'react';
import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';
import { SvgIcon } from '@mui/joy';

interface SearchProps {
  searchValue?: string;
  showClearButton?: boolean;
  onClear?: () => void;
  onChange: (searchString: string) => void;
}

export function Search({
  searchValue,
  onClear,
  onChange,
  showClearButton = false,
}: SearchProps) {
  const [value, setValue] = useState(searchValue ?? '');

  useEffect(() => {
    const value = searchValue || '';
    setValue(value);
  }, [searchValue]);

  const handleClearValue = () => {
    onClear?.();
    setValue('');
  };

  const handleStringValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    onChange(value);
  };

  return (
    <Input
      value={value}
      placeholder="Search"
      onChange={handleStringValueChange}
      startDecorator={
        <SvgIcon
          color="primary"
          viewBox="0 0 16 16"
          sx={{
            height: 16,
            width: 16,
          }}
        >
          <SearchIcon />
        </SvgIcon>
      }
      {...(showClearButton &&
        onClear && {
          endDecorator: (
            <IconButton
              color="neutral"
              variant="plain"
              onClick={handleClearValue}
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
          ),
        })}
    />
  );
}
