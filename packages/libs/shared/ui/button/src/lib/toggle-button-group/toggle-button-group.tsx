import { forwardRef } from 'react';
import JoyToggleButtonGroup, {
  ToggleButtonGroupProps as JoyToggleButtonGroupProps,
  SupportedValue,
} from '@mui/joy/ToggleButtonGroup';

export const ToggleButtonGroup = forwardRef<
  HTMLDivElement,
  JoyToggleButtonGroupProps<SupportedValue>
>(({ children, ...rest }: JoyToggleButtonGroupProps<SupportedValue>, ref) => (
  <JoyToggleButtonGroup ref={ref} {...rest}>
    {children}
  </JoyToggleButtonGroup>
));
