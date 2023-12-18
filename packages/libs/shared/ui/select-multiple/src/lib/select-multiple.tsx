import { useMemo } from 'react';
import { Autocomplete } from '@task-flow/shared/ui/autocomplete';
import { Option, Select } from '@task-flow/shared/ui/select';
import { Chip, ChipDelete } from '@task-flow/shared/ui/chip';
import { CircularProgress } from '@task-flow/shared/ui/circular-progress';

type Option<ValueType> = {
  value: ValueType;
  label: string;
};

type SelectMultipleProps<ValueType> = {
  value: ValueType[];
  onChange: (data: ValueType[]) => void;
  onBlur?: React.FocusEventHandler<HTMLDivElement | HTMLButtonElement>;
  disabled?: boolean;
  name: string;
  searchEnabled?: boolean;
  options: Option<ValueType>[];
  placeholder?: string;
  loading?: boolean;
};

export function SelectMultiple<ValueType extends string = string>({
  onChange,
  searchEnabled,
  options,
  loading,
  ...rest
}: SelectMultipleProps<ValueType>) {
  const optionsByValue = useMemo(() => {
    const map = new Map<ValueType, Option<ValueType>>();
    options.forEach((option) => map.set(option.value, option));
    return map;
  }, [options]);

  return searchEnabled ? (
    <Autocomplete
      {...rest}
      loading={loading}
      multiple
      filterSelectedOptions
      options={options}
      onChange={(_, data) => {
        const selected = data.map((item) =>
          typeof item === 'string' ? (item as ValueType) : item.value
        );
        onChange(selected);
      }}
      isOptionEqualToValue={(option, value: string | Option<ValueType>) =>
        typeof value === 'string'
          ? option.value === value
          : option.value === value.value
      }
      endDecorator={
        loading ? (
          <CircularProgress size="sm" sx={{ bgcolor: 'background.surface' }} />
        ) : null
      }
      renderTags={(tags, getTagProps) =>
        tags.map((item, index) => {
          const label =
            typeof item === 'string'
              ? optionsByValue.get(item)?.label
              : item.label;

          const { onClick, ...rest } = getTagProps({ index });

          return (
            <Chip
              {...rest}
              variant="soft"
              color="primary"
              endDecorator={
                <ChipDelete
                  variant="plain"
                  color="neutral"
                  onDelete={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onClick(e);
                  }}
                />
              }
            >
              {label}
            </Chip>
          );
        })
      }
    />
  ) : (
    <Select
      {...rest}
      placeholder="test"
      onChange={(_, data) => onChange(data)}
      multiple
    >
      {options.map(({ value, label }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      ))}
    </Select>
  );
}
