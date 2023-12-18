import JoySelect, { SelectProps } from '@mui/joy/Select';

export function Select<
  OptionValue extends NonNullable<unknown>,
  Multiple extends boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  D extends React.ElementType<any> = 'button'
>(props: SelectProps<OptionValue, Multiple, D>) {
  return <JoySelect {...props} />;
}
