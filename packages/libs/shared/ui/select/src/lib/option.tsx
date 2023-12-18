import React from 'react';
import JoyOption, { OptionProps } from '@mui/joy/Option';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Option<D extends React.ElementType<any> = 'li'>(
  props: OptionProps<D>
) {
  return <JoyOption {...props} />;
}
