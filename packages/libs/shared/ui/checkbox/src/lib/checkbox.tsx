import JoyCheckBox, {
  CheckboxProps as JoyCheckboxProps,
} from '@mui/joy/Checkbox';
import { Stack } from '@task-flow/shared/ui/stack';
import { Typography } from '@task-flow/shared/ui/typography';
import CircularProgress from '@mui/joy/CircularProgress';

import { CheckIcon } from './check-icon';
import { IndeterminateIcon } from './indeterminate-icon';

export const ProgressSizeToCheckBoxSize = {
  sm: '16px',
  md: '20px',
  lg: '22px',
};

export interface CheckboxProps extends JoyCheckboxProps {
  loading?: boolean;
}

export function Checkbox({ loading = false, ...props }: CheckboxProps) {
  return loading ? (
    <Stack direction={'row'} gap={2} alignItems={'center'}>
      <CircularProgress
        sx={{
          bgcolor: 'background.surface',
          '--CircularProgress-size':
            ProgressSizeToCheckBoxSize[props.size || 'md'],
          '--CircularProgress-trackThickness': '2px',
          '--CircularProgress-progressThickness': '2px',
        }}
      />
      <Typography lineHeight={props.size} fontSize={props.size} sx={props.sx}>
        {props.label}
      </Typography>
    </Stack>
  ) : (
    <JoyCheckBox
      checkedIcon={<CheckIcon />}
      indeterminateIcon={<IndeterminateIcon />}
      {...props}
    />
  );
}

export default Checkbox;
