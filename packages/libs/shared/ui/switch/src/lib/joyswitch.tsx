import React from 'react';
import JoySwitch, { SwitchProps as JoySwitchProps } from '@mui/joy/Switch';
import { Skeleton } from '@task-flow/shared/ui/skeleton';
interface SwitchProps extends JoySwitchProps {
  skeleton?: boolean;
}

export const Switch = ({ skeleton, ...rest }: SwitchProps) => {
  return skeleton ? (
    <Skeleton
      variant="rectangular"
      sx={{
        borderRadius: (theme) => theme.vars.radius[rest.size || 'xl'],
        height: '24px',
        width: '48px',
      }}
    >
      <JoySwitch {...rest} />
    </Skeleton>
  ) : (
    <JoySwitch {...rest} />
  );
};
